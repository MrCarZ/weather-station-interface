import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import config from "../chart/config";
import { Line } from "react-chartjs-2";
import { WeatherStationContext } from "../contexts/weatherStationContext";
import { mapDataToArrayPosition } from "../helpers/mapDataToArrayPosition";
import { checkValidLocalStorage } from "../helpers/checkValidLocalStorage";
import { socketService } from "../services/socketService";
import { weatherStationService } from "../services/weatherStationService";

const MultiChart = () => {
  const chartRef = useRef(null);

  const { weatherData, insertWeatherData, last } = useContext(WeatherStationContext);

  const labels = weatherData.timestamp;

  const validDatasets = Object.keys(weatherData).filter((key) => {
    if (key !== "timestamp") {
      return weatherData[key];
    }
  });

  const datasets = validDatasets.map((value) => weatherData[value]);

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  const getInitialWeatherData = useCallback(async () => {
    try {
      /* Check for LocalStorage Data, if updated, then don't fetch from API */
      if (checkValidLocalStorage("weatherStationApp") === false) {
        const currentDate = new Date();
        const weatherDataFromAPI = await weatherStationService.getDataFromAPI(currentDate);
        updateChartData(weatherDataFromAPI);
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      /* Either Way, after fetching or just retrieving data from LocalStorage, initialize socket */
      socketService.socketOn("rasp-message", (newMeasure) => {
        const newMeasureArrayObject = JSON.parse(newMeasure);
        updateChartData(newMeasureArrayObject);
      });
    }
  }, []);

  useEffect(() => {
    /* Mounting Component */
    getInitialWeatherData();

    /* Unmounting Component */
    return () => socketService.socketDisconnect();
  }, [getInitialWeatherData]);

  const updateChartData = (newMeasureArrayObject) => {
    const { labels, datasets } = chartData;


    newMeasureArrayObject.map((newMeasureObject) => {

      const dataIndex = mapDataToArrayPosition(newMeasureObject.timestamp, newMeasureObject.lightningStrike);
      if (!newMeasureObject.lightningStrike) {
        const timestampAsDate = new Date(newMeasureObject.timestamp);
        labels[dataIndex] = timestampAsDate.toLocaleTimeString("pt-br");
      }

      validDatasets.map((dataType, index) => {

        if (dataType === "lightningStrike") {
          if (newMeasureObject.lightningStrike) {
            console.log("raio");
            console.log(datasets[index][dataIndex]);
            const newdata = datasets[index][dataIndex]+1; 
            datasets[index][dataIndex] =
              (datasets[index].data[dataIndex] === null) ? 1 : newdata;

            console.log(datasets[index][dataIndex]);
          }
        }
        else {
          datasets[index].data[dataIndex] = newMeasureObject[dataType];
        }
      });
    })

    insertWeatherData(newMeasureArrayObject);
    const chart = chartRef.current;

    if (chart) {
      chart.update();
    }
  };

  return (
    <>
      <Line ref={chartRef} data={chartData} options={config} />
    </>
  );
};

export default MultiChart;
