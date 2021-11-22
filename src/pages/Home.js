import React from "react";
import { ChartCard, StatusCard, CSVCard } from "../components/Cards";
import { Grid } from "@mui/material";

const Home = (props) => {
  return (
    <>
      <Grid container columns={12} spacing={0}>
        <Grid
          container
          item
          xs={6}
          spacing={2}
          sx={{
            margin: "auto",
            maxWidth: 550,
          }}
        >
          <Grid item xs={12}>
            <ChartCard sx={{ height: 500 }} data={props.data} />
          </Grid>
          <Grid item xs={12}>
            <CSVCard />
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
