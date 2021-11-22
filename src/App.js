import "./App.css";
import socketio from "socket.io-client";
import Home from "./pages/Home";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const getRandomXAxis = () => {
  const size = 120;//Math.round(Math.random() * 100);
  const xAxis = [];
  for (let i = 1; i < size; i++) {
    xAxis.push(i);
  }
  return xAxis;
};

const getRandomArray = (xAxis, type) => {
  const yAxis = xAxis.map(() => {
    return type == 0 ? Math.round(Math.random()*100) : Math.round(Math.random())*50;
  });
  return yAxis;
};

const xAxis = getRandomXAxis();

const data = {
  labels: xAxis,
  datasets: [
    {
      label: "Temperature (°C)",
      data: getRandomArray(xAxis, 0),
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132)",
      type: "line",
    },
    {
      label: "Pressure (Pa)",
      data: getRandomArray(xAxis, 0),
      fill: false,
      backgroundColor: "rgb(54, 1, 235)",
      borderColor: "rgba(54, 1, 235)",
      type: "line",
    },
    {
      label: "Humidity",
      data: getRandomArray(xAxis, 0),
      fill: false,
      backgroundColor: "rgb(25, 9, 12)",
      borderColor: "rgba(25, 9, 12)",
      type: "line",
    },
    {
      label: "LightningStrike",
      data: getRandomArray(xAxis, 1),
      fill: false,
      backgroundColor: "rgb(54, 15, 235)",
      borderColor: "rgba(54, 15, 235)",
      type: "bar",
    },
  ],
};

function App() {
  
  /* TODO: Estruturar dados do Chart de maneira consistente
     TODO: Criar um sistema de atualização das informações do Status Card com base nos dados
     TODO: Implementar a funcionalidade de download do arquivo .CSV
  /*
  const socket = socketio("http://192.168.0.13:3000");
  socket.on("rasp-message", (data) => {
    JSON.stringify(data);
    console.log(data);
  });
  */

  return (
    <div className="App">
      <header className="App-header">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Home data={data} />
        </LocalizationProvider>
      </header>
    </div>
  );
}

export default App;
