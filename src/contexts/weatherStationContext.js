import React, { createContext, useState, useContext, useEffect } from "react";
import weatherInitialData from "./weatherInitialData";
import { mapDataToArrayPosition } from "../helpers/mapDataToArrayPosition";
import { checkValidLocalStorage } from "../helpers/checkValidLocalStorage";

export const WeatherStationContext = createContext();

const updateWeatherData = (weatherData, newMeasureObject) => {
  const { temperature, pressure, humidity, lightningStrike } = weatherData;

  return {
    ...weatherData,
    timestamp: newMeasureObject.timestamp,
    temperature: {
      ...temperature,
      data: newMeasureObject?.temperature ? newMeasureObject.temperature : temperature.data,
    },
    pressure: {
      ...pressure,
      data: newMeasureObject?.pressure ? newMeasureObject.pressure : pressure.data,
    },
    humidity: {
      ...humidity,
      data: newMeasureObject?.humidity ? newMeasureObject.humidity : humidity.data,
    },
    lightningStrike: {
      ...lightningStrike,
      data: newMeasureObject?.lightningStrike ? newMeasureObject.lightningStrike : lightningStrike.data,
    }
  };
}

const retrieveWeatherData = () => {
  const currentLocalStorageData = JSON.parse(localStorage.getItem("weatherStationApp"));
  if (checkValidLocalStorage("weatherStationApp") === true) {
    return currentLocalStorageData.weatherData;
  }
  else {
    localStorage.removeItem("weatherStationApp");
    return weatherInitialData;
  }
}

const WeatherStationContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(retrieveWeatherData());
  const [lastWeatherTimestamp, setLastWeatherTimestamp] = useState(null);

  const saveWeatherData = (weatherData) => {
    const currentLocalStorageData = localStorage.getItem("weatherStationApp");
    if (currentLocalStorageData) {
      localStorage.removeItem("weatherStationApp");
    }
    const newLocalStorageData = {
      weatherData: weatherData,
      date: new Date()
    }

    localStorage.setItem("weatherStationApp", JSON.stringify(newLocalStorageData));
  }

  const insertWeatherData = (newMeasureArrayObject) => {
    console.log(newMeasureArrayObject);
    const propertiesArray = Object.keys(newMeasureArrayObject[0]);
    console.log(propertiesArray);
    const dataObjectArray = propertiesArray.map((dataType) => {
      const oldDataArray =
        (dataType == "timestamp") ? weatherData[dataType] : weatherData[dataType].data;
      const newDataArray = [...oldDataArray];

      return { [dataType]: newDataArray };
    })

    const dataObject = dataObjectArray.reduce((object, currentArrayValue) => { return Object.assign(object, currentArrayValue) });

    let lastTimestamp = lastWeatherTimestamp;

    /* If last recorded Timestamp is in diffent day than next timestamp, clear weatherData */
    if (lastTimestamp != null && lastTimestamp.toDateString() !== newMeasureArrayObject[0].timestamp) {
      setWeatherData(weatherInitialData);
    }

    newMeasureArrayObject.map((newMeasureObject) => {
      const isLightningStrike = newMeasureObject.lightningStrike ? true : false;

      lastTimestamp = newMeasureObject.timestamp;

      const dataIndex = mapDataToArrayPosition(newMeasureObject.timestamp, isLightningStrike);

      propertiesArray.map((dataType) => {
        if (dataType === "timestamp") {
          if (!isLightningStrike) {
            const timestampAsDate = new Date(newMeasureObject[dataType]);
            dataObject[dataType][dataIndex] = timestampAsDate.toLocaleTimeString("pt-br");
          }
        }
        else if (dataType === "lightningStrike") {
          if (isLightningStrike) {
            dataObject[dataType][dataIndex] =
              (dataObject[dataType][dataIndex] === null) ? 1 : dataObject[dataType][dataIndex] + 1;
          }
        }
        else {
          dataObject[dataType][dataIndex] = newMeasureObject[dataType];
        }
      })

    })
    const newWeatherData = updateWeatherData(weatherData, dataObject);

    setLastWeatherTimestamp(lastTimestamp);
    setWeatherData(newWeatherData);
    saveWeatherData(newWeatherData);

  };

  const getInfoStats = (type) => {
    if (type !== "lightningStrike") {

      const dataArray = weatherData[type]?.data;

      const last = dataArray?.slice(-1);
      let max = -Infinity;
      let min = Infinity;

      for (let i = 0; i < dataArray?.length; i++) {
        if (dataArray[i] !== null) {
          max = Math.max(max, dataArray[i]);
          min = Math.min(min, dataArray[i]);
        }
      }

      return { last, max, min };
    }
    // TODO:change to accept data from back-end;
    const day = new Date().toDateString();
    return { day };
  };

  return (
    <WeatherStationContext.Provider
      value={{ lastWeatherTimestamp, weatherData, setWeatherData, getInfoStats, insertWeatherData, retrieveWeatherData, saveWeatherData }}
    >
      {children}
    </WeatherStationContext.Provider>
  );

};

export default WeatherStationContextProvider;
