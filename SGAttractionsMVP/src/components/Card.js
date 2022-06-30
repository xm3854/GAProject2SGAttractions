import React from "react";
import { Link } from "react-router-dom";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";

const apiKey = "2Km8943D1xLZ9YImM03osKUEjUJecb26";

const Card = (props) => {
  let imgSource = "";
  if (props.item.images.length > 0) {
    imgSource =
      props.item.images[0].url === ""
        ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${props.item.images[0].uuid}?apikey=${apiKey}`
        : `${props.item.images[0].url}`;
  } else {
    imgSource =
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg";
  }

  let ratings = "";
  if (props.item.rating === 0) {
    ratings = 0;
  } else {
    ratings = props.item.rating;
  }

  let reviewNum = "";
  if (props.item.reviews.length > 0) {
    reviewNum = props.item.reviews.length;
  } else {
    reviewNum = 0;
  }


  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={imgSource} alt={props.item.name} className="img"></img>
        <Box paddingX={1}>
          <Typography variant="subtitle2">{props.item.name}</Typography>
        </Box>
        <Box
          marginTop={3}
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="half-rating-read"
            precision={0.5}
            value={ratings}
            size="small"
            readOnly
          />
          <Typography variant="body2" marginLeft={0.5}>
            {ratings}
          </Typography>
          <Typography variant="body2" marginLeft={0.5}>
            ({reviewNum} reviews)
          </Typography>
        </Box>
        <Link to={`/${props.item.dataset}/${props.item.uuid}`}>
          <button>See More</button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Card;
