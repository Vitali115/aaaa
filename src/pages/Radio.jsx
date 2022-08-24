import React from "react";
import "../styles.scss";

import Header from "../components/Header";
import Menu from "../components/LeftMenu";
import Trend from "../components/RightMenu";
import Grid from "@material-ui/core/Grid";
import RadioProfileSmall from "../components/RadioProfileSmall";
import RadioPlayerHeader from "../components/RadioPlayerHeader";
import RadioProfile from "../components/RadioProfile";
export default function RadioUser() {
  return (
    <>
      <section className="App">
        <Header />
        <section className="markup--page">
          <Menu />
          <section>
            <RadioPlayerHeader />
            <hr />
            <Grid style={{ display: "flex" }}>
              <RadioProfileSmall />
              <RadioProfileSmall />
              <RadioProfileSmall />
            </Grid>
            <hr />
            <Grid style={{ display: "flex" }}>
              <RadioProfileSmall />
              <RadioProfileSmall />
              <RadioProfileSmall />
            </Grid>

            <br />
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
