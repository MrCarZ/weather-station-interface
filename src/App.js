import "./App.css";
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
