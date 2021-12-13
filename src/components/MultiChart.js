import React, { useState, useContext, useEffect, useRef } from "react";
import config from "../chart/config";
import { Line } from "react-chartjs-2";
import { WeatherStationContext } from "../contexts/weatherStationContext";
import socketio from "socket.io-client";
import createMeasureObject from "../helpers/createMeasureObject";

const MultiChart = () => {
  const chartRef = useRef(null);
  const socket = socketio.connect("http://192.168.0.12:3000/");
  const { weatherData, appendWeatherData } = useContext(WeatherStationContext);

  const labels = weatherData.timestamp;
  const validDatasets = Object.keys(weatherData).filter((key) => {
    if (key !== "timestamp") {
      return weatherData[key];
    }
  });
  const datasets = validDatasets.map((value) => weatherData[value]);
  console.log(datasets)

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  useEffect(() => {
    socket.on("rasp-message", (newMeasure) => {
      //TODO: Recreate this method in back-end
      const measureObject = createMeasureObject(JSON.parse(newMeasure));
      console.log(measureObject);
      updateChartData(measureObject);
    });
  }, []);

  const updateChartData = (lastMeasure) => {
    const chart = chartRef.current;

    const { labels, datasets } = chartData;

    labels?.push(lastMeasure.timestamp);

    datasets[0].data.push(lastMeasure.temperature);
    datasets[1].data.push(lastMeasure.pressure);
    datasets[2].data.push(lastMeasure.humidity);
    datasets[3].data.push(lastMeasure.lightningStrike);

    if (chart) {
      chart.update();
      appendWeatherData(lastMeasure);
    }
  };

  return (
    <>
      <Line ref={chartRef} data={chartData} options={config} />
    </>
  );
};

export default MultiChart;
