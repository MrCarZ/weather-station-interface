import React, { createContext, useState, useContext, useEffect } from "react";

export const WeatherStationContext = createContext();

const getRandomXAxis = () => {
  const size = 30;
  const xAxis = [];
  for (let i = 1; i < size; i++) {
    xAxis.push(i);
  }
  return xAxis;
};

const xAxis = getRandomXAxis();

const getRandomArray = (xAxis) => {
  const yAxis = xAxis.map(() => {
    return Math.round(Math.random() * 50);
  });
  return yAxis;
};

const weatherStationStats = {
  timestamp: xAxis,
  temperature: {
    label: "Temperature (°C)",
    data: getRandomArray(xAxis),
    fill: false,
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgba(255, 99, 132)",
    type: "line",
  },
  humidity: {
    label: "Pressure (Pa)",
    data: getRandomArray(xAxis),
    fill: false,
    backgroundColor: "rgb(54, 1, 235)",
    borderColor: "rgba(54, 1, 235)",
    type: "line",
  },
  pressure: {
    label: "Humidity",
    data: getRandomArray(xAxis),
    fill: false,
    backgroundColor: "rgb(25, 9, 12)",
    borderColor: "rgba(25, 9, 12)",
    type: "line",
  },
  lightningStrike: {
    label: "Lightning Strike",
    data: getRandomArray(xAxis),
    fill: false,
    backgroundColor: "rgb(54, 15, 235)",
    borderColor: "rgba(54, 15, 235)",
    type: "bar",
  },
};

const WeatherStationContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(weatherStationStats);

  // TODO: Append data to object (Test with hardware online)
  const appendWeatherData = (weatherData) => {


  }

  const getInfoStats = (type) => {
    if (type !== "lightningStrike") {
      const dataArray = weatherData[type].data;

      const last = dataArray.slice(-1);
      let max = -Infinity;
      let min = Infinity;

      for (let i = 0; i < dataArray.length; i++) {
        max = Math.max(max, dataArray[i]);
        min = Math.min(min, dataArray[i]);
      }
      return { last, max, min };
    }
    // TODO:change to accept data from back-end;
    const day = new Date().toDateString();
    return { day };
  };

  return (
    <WeatherStationContext.Provider
      value={{ weatherData, setWeatherData, getInfoStats }}
    >
      {children}
    </WeatherStationContext.Provider>
  );
};

export default WeatherStationContextProvider;
