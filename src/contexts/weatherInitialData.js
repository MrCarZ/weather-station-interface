const createTimestampArray = () => {
    let arr = Array();

    let startTime = new Date().setHours(0, 0, 0, 0);

    for (let i = 0; i < 1440; i++) {
        const currentTime = new Date(startTime + i * 60000);
        arr[i] = currentTime.toLocaleTimeString("pt-BR");
    }

    return arr;
}

const weatherInitialData = {
    timestamp: createTimestampArray(),
    temperature: {
        label: "Temperature (°C)",
        data: Array(1440).fill(null),
        fill: false,
        pointRadius: 1,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
        type: "line",
        yAxisID: "y1",
    },
    pressure: {
        label: "Pressure (Pa)",
        data: Array(1440).fill(null),
        pointRadius: 1,
        fill: false,
        backgroundColor: "rgb(54, 1, 235)",
        borderColor: "rgba(54, 1, 235)",
        type: "line",
        yAxisID: "y2",
    },
    humidity: {
        label: "Humidity",
        data: Array(1440).fill(null),
        pointRadius: 1,
        fill: false,
        backgroundColor: "rgb(25, 9, 12)",
        borderColor: "rgba(25, 9, 12)",
        type: "line",
        yAxisID: "y3",
    },
    lightningStrike: {
        label: "Lightning Strike",
        data: Array(1440).fill(null),
        fill: false,
        pointStyle: "triangle",
        pointRadius: 8,
        backgroundColor: "#F9A602",
        borderColor: "#000000",
        type: "scatter",
        yAxisID: "y4",
    },
};

export default weatherInitialData;