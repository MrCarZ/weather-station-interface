const config = {
  responsive: true,
  maintainAspectRatio: false,
  spanGaps: true,
  type: "line",
  scales: {
    x: {
      /* configuration to change labels presentation */
      ticks:{
        maxTicksLimit: 24 
      },
      suggestedMin: 20,
      suggestedMax: 40
    },
    y1: {
      position: "left",
      display: true,
      id: "temperature-axis",
      suggestedMin: 20,
      suggestedMax: 40
    },
    y2: {
      position: "left",
      display: true,
      id: "pressure-axis",
      suggestedMin: 20,
      suggestedMax: 40
    },
    y3: {
      position: "right",
      display: true,
      id: "humidity-axis",
      suggestedMin: 20,
      suggestedMax: 40
    },
    y4: {
      position: "right",
      display: true,
      id: "lightning-axis",
      suggestedMin: 20,
      suggestedMax: 40
    },
  },
};

export default config;
