import React, { useContext } from "react";
import config from "../chart/config";
import { Line } from "react-chartjs-2";
import {WeatherStationContext} from '../contexts/weatherStationContext';

const MultiChart = () => {
  const {weatherData} = useContext(WeatherStationContext);

  const xAxis = weatherData.timestamp;
  const yAxis = Object.keys(weatherData).map((value) => {
    if (value !== "timestamp") {
      return weatherData[value];
    }
  });

  const data = {
    labels: xAxis,
    datasets: yAxis,
  };

  const options = { data: data, ...config };
  
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default MultiChart;
