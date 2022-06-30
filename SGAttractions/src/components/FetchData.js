import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Container, Grid } from "@mui/material";

const apiKey = "2Km8943D1xLZ9YImM03osKUEjUJecb26";

const FetchData = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchDataHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=${props.keyword}&language=en&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setData(data.data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <Container>
      {!isLoading && (
        <Grid container spacing={3}>
          {data &&
            data.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
        </Grid>
      )}
      {isLoading && <p>Loading ... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </Container>
  );
};

export default FetchData;
