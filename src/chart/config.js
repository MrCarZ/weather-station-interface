const config = {
  type: "line",
  scales: {
    y1: {
      position: "left",
      display: true,
      id: "temperature-axis",
    },
    y2: {
      position: "left",
      display: true,
      id: "pressure-axis",
    },
    y3: {
      position: "right",
      display: true,
      id: "humidity-axis",
    },
    y4: {
      position: "right",
      display: true,
      id: "lightning-axis",
    },
  },
};

export default config;
