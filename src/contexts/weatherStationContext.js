import React, { createContext, useState, useContext, useEffect } from "react";

export const WeatherStationContext = createContext();

const weatherStationStats = {
  timestamp: [],
  temperature: {
    label: "Temperature (°C)",
    data: [],
    fill: false,
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgba(255, 99, 132)",
    type: "line",
    yAxisID: "y1",
  },
  pressure: {
    label: "Pressure (Pa)",
    data: [],
    fill: false,
    backgroundColor: "rgb(54, 1, 235)",
    borderColor: "rgba(54, 1, 235)",
    type: "line",
    yAxisID: "y2",
  },
  humidity: {
    label: "Humidity",
    data: [],
    fill: false,
    backgroundColor: "rgb(25, 9, 12)",
    borderColor: "rgba(25, 9, 12)",
    type: "line",
    yAxisID: "y3",
  },
  lightningStrike: {
    label: "Lightning Strike",
    data: [],
    fill: false,
    pointStyle: "triangle",
    pointRadius: 8,
    backgroundColor: "#F9A602",
    borderColor: "#000000",
    type: "scatter",
    yAxisID: "y4",
  },
};

const WeatherStationContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(weatherStationStats);

  // TODO: Append data to object (Test with hardware online)
  const appendWeatherData = (data) => {
    const { timestamp, temperature, pressure, humidity } = weatherData;

    const newTimestamp = [...timestamp, data.timestamp];
    const newTemperatureArray = [...temperature.data, data.temperature];
    const newPressureArray = [...pressure.data, data.pressure];
    const newHumidityArray = [...humidity.data, data.humidity];

    const newWeatherData = {
      timestamp: newTimestamp,
      temperature: {
        ...temperature,
        data: newTemperatureArray,
      },
      pressure: {
        ...pressure,
        data: newPressureArray,
      },
      humidity: {
        ...humidity,
        data: newHumidityArray,
      },
    };
    setWeatherData(newWeatherData);
  };

  const getInfoStats = (type) => {
    if (type !== "lightningStrike") {
    
      const dataArray = weatherData[type].data;

      const last = dataArray?.slice(-1);
      let max = -Infinity;
      let min = Infinity;

      for (let i = 0; i < dataArray.length; i++) {
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
      value={{ weatherData, setWeatherData, getInfoStats, appendWeatherData }}
    >
      {children}
    </WeatherStationContext.Provider>
  );
};

export default WeatherStationContextProvider;
