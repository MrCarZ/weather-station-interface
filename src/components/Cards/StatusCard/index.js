import React from "react";
import StatusInfo from "./StatusInfo";
import { Card, CardContent, Typography } from "@mui/material";
import { Thermometer, CloudDrizzle, Sun, CloudLightning } from "react-feather";

const data = [
  {
    name: "Temperature",
    Icon: () => <Sun size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 23,
      "Min (Last 24h)": 22,
    },
  },
  {
    name: "Humidity",
    Icon: () => <CloudDrizzle size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 25,
      "Min (Last 24h)": 26,
    },
  },
  {
    name: "Pressure",
    Icon: () => <Thermometer size={25} />,
    info: {
      "Last Measure": 0,
      "Max (Last 24h)": 23,
      "Min (Last 24h)": 22,
    },
  },
  {
    name: "Last Lightning Strike",
    Icon: () => <CloudLightning size={25} />,
    info: {
      Day: new Date().toDateString(),
      Second: 23,
      Millisecond: 22,
    },
  },
];

const StatusCard = (props) => {
  return (
    <Card sx={{ maxWidth: 550,  }}>
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
        {data?.map((e) => (
          <StatusInfo name={e.name} Icon={e.Icon} info={e.info} />
        ))}
      </CardContent>
    </Card>
  );
};

export default StatusCard;
