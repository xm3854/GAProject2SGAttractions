import React, { useState } from "react";
import { Grid } from "@mui/material";

const Search = (props) => {
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputEntered = input;
    props.handleClick(inputEntered);
    setInput("");
  };

  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Explore something"
          onChange={handleInput}
          value={input}
        />
        <button type="submit">Explore</button>
      </form>
    </Grid>
  );
};

export default Search;
