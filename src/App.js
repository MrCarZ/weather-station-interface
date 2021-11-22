import "./App.css";
import socketio from "socket.io-client";
import Home from './pages/Home';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "# of No Votes",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      yAxisID: "y-axis-2",
    }
  ],
};

function App() {
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
          <Home data={data}/>
        </LocalizationProvider>
      </header>
    </div>
  );
}

export default App;
