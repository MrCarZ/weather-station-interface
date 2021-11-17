import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        position: "left",
        display: true,
        id: "y-axis-1",
      },
      {
        type: "linear",
        position: "right",
        display: true,
        id: "y-axis-2"
      },
    ],
  },
};

const MultiChart = (props) => {
  return (
    <>
      <Line data={props.data} options={options} />
    </>
  );
};

export default MultiChart;
