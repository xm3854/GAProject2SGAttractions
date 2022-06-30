import React, { useState } from "react";
import FetchData from "../components/FetchData";
import Search from "../components/Search";
import { Grid } from "@mui/material";

const Main = () => {
  const [enteredInput, setEnteredInput] = useState("");

  const addToInput = (input) => {
    setEnteredInput(input);
  };

  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center">
      <h1>Let's Explore SG</h1>
      <Search handleClick={addToInput} />
      {enteredInput && <FetchData keyword={enteredInput} />}
    </Grid>
  );
};

export default Main;
