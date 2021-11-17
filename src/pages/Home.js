import React from "react";
import { ChartCard, StatusCard } from "../components/Cards";
import { Grid } from "@mui/material";
const Home = (props, children) => {
  return (
    <>
      <Grid container columns={12} spacing={0}>
        <Grid
          container
          item
          xs={6}
          sx={{
            margin: "auto",
            maxWidth: 550,
            overflow: "auto",
          }}
        >
          <Grid item xs={12}>
            LPDA Weather Station
          </Grid>
          <Grid item xs={12}>
            <ChartCard data={props.data} />
          </Grid>
          <Grid item xs={12}>
            Botão
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <StatusCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
