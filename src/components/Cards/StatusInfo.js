import React from "react";
import {Typography} from '@mui/material';



const StatusInfo = (props) => {
    const {name, last, min, max} = props;
    return (
    <>
      <Typography gutterBottom variant="overline" align="left" component="div">
        {name} 
      </Typography>

      <Typography
        gutterBottom
        variant="body2"
        align="left"
        component="p"
        color="text.secondary"
      >
        Last Measure:
        
        <span textAlign="right">0</span>
        
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        align="left"
        component="p"
        color="text.secondary"
      >
        {" "}
        Minimum (Last 24h): 0
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        align="left"
        component="p"
        color="text.secondary"
      >
        {" "}
        Maximum (Last 24h): 0
      </Typography>
    </>
  );
};

export default StatusInfo;