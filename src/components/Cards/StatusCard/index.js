import React, { useContext, useState, useEffect } from "react";
import StatusInfo from "./StatusInfo";
import { Card, CardContent, Typography } from "@mui/material";
import { Thermometer, CloudDrizzle, Sun, CloudLightning } from "react-feather";
import { WeatherStationContext } from "../../../contexts/weatherStationContext";

const dataTemplate = [
  {
    type: "temperature",
    name: "Temperature",
    Icon: () => <Sun size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 0,
      "Min (Last 24h)": 0,
    },
  },
  {
    type: "pressure",
    name: "Pressure",
    Icon: () => <Thermometer size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 0,
      "Min (Last 24h)": 0,
    },
  },
  {
    type: "humidity",
    name: "Humidity",
    Icon: () => <CloudDrizzle size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 0,
      "Min (Last 24h)": 0,
    },
  },
  /*
  {
    type: "lightningStrike",
    name: "Last Lightning Strike",
    Icon: () => <CloudLightning size={25} />,
    info: {
      Day: new Date().toDateString(),
    },
  },
  */
];

const StatusCard = () => {
  const { weatherData, getInfoStats } = useContext(WeatherStationContext);
  const [chartData, setChartData] = useState(dataTemplate);

  useEffect(() => {
    const data = dataTemplate.map((value) => {
      const { last, min, max, day } = getInfoStats(value.type);
      if (value.type !== "lightningStrike") {
        const newInfo = {
          "Last Measure": last,
          "Max (Last 24h)": max,
          "Min (Last 24h)": min,
        };
        return {
          ...value,
          info: newInfo,
        };
      }
      
      return { ...value, info: { Day: day } };
    });
    setChartData(data);
  }, [weatherData]);



  return (
    <Card sx={{ maxWidth: 550 }}>
      <CardContent sx={{ maxHeight: 600, overflow: "auto" }}>
        <Typography
          gutterBottom
          component="div"
          sx={{ marginTop: 3, fontSize: 20, fontWeight: "bolder" }}
          variant="button"
          align="center"
        >
          General Information
        </Typography>
        {chartData?.map((e) => {
          return <StatusInfo name={e.name} Icon={e.Icon} info={e.info} />;
        })}
      </CardContent>
    </Card>
  );
};

export default StatusCard;
