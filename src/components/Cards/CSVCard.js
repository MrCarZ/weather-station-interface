import React, { useState } from "react";
import {FileText} from 'react-feather';
import { Card, CardContent } from "@mui/material";
import { Fab, TextField, Grid, Typography } from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";

const dateTimePickerStyles = {
  style: {
    maxWidth: 250,
    fontSize: "0.9rem",
  },
};


const CSVCard = (props) => {
  const { data } = props;
  const [value, setValue] = useState(null);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{justifyContent:"space-evenly"}}>
          <Grid item sx={5}>
            <DateTimePicker
              label="From:"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params}></TextField>}
              InputProps={dateTimePickerStyles}
            />
          </Grid>

          <Grid item sx={5}>
            <DateTimePicker
              label="To:"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              InputProps={dateTimePickerStyles}
            />
          </Grid>

          <Grid item sx={2}>
            <Fab size="medium" variant="primary" children={<FileText/>}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CSVCard;
