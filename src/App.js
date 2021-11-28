import "./App.css";
import socketio from "socket.io-client";
import Home from "./pages/Home";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { useState } from "react";
import WeatherStationContextProvider from "./contexts/weatherStationContext";

function App() {
  /* TODO: Estruturar dados do Chart de maneira consistente
     TODO: Criar um sistema de atualização das informações do Status Card com base nos dados
     TODO: Implementar a funcionalidade de download do arquivo .CSV
  */
  const socket = socketio("http://192.168.0.13:3000/");
  const [newData, setNewData] = useState(null);

  socket.on("rasp-message", (newMeasure) => {
    //TODO: Recreate this method in back-end
    const newMeasureObject = JSON.parse(newMeasure);
    const measure = {
      timestamp: new Date(
        newMeasureObject.year,
        newMeasureObject.month,
        newMeasureObject.day,
        newMeasureObject.hour,
        newMeasureObject.minute,
        newMeasureObject.second
      ),
      temperature: newMeasureObject.temperature,
      humidity: newMeasureObject.humidity,
      pressure: newMeasureObject.pressure,
    };
    setNewData(measure);
  });

  return (
    <div className="App">
      <header className="App-header">
        <WeatherStationContextProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Home />
          </LocalizationProvider>
        </WeatherStationContextProvider>
      </header>
    </div>
  );
}

export default App;
