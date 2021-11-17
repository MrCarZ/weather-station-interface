import React from "react";
import {ChartCard, StatusCard} from '../components/Cards';

const Home = (props, children) => {
  return (
    <>
      <ChartCard data={props.data} />
      <StatusCard>

      </StatusCard>
    </>
  );
};

export default Home;
