import React from "react";
import { ChartCard, StatusCard, CSVCard } from "../components/Cards";
import { Grid, Typography } from "@mui/material";

const Home = (props) => {
  return (
    <>
      <Grid container columns={12} spacing={0} >
        <Grid
          container
          item
          xs={7}
          spacing={1}
          sx={{
            margin: "auto",
            //maxWidth: 550,
          }}
        > 
          <Grid item xs={12}>
            <Typography variant="h3"> LPDA Weather Station </Typography>
          </Grid>
          <Grid item xs={12}>
            <ChartCard data={props.data} />
          </Grid>
          <Grid item xs={12}>
            <CSVCard />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{margin: "auto"}}>
          <StatusCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
