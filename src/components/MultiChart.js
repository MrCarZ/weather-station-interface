import React from "react";
import config from '../chart/config';
import { Line } from "react-chartjs-2";


const MultiChart = (props) => {
  const options = {data: props.data, ...config };
  console.log(options);
  return (
    <>
      <Line data={props.data} options={options} />
    </>
  );
};

export default MultiChart;
