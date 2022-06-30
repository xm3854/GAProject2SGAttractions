import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";

const apiKey = "2Km8943D1xLZ9YImM03osKUEjUJecb26";

const Detail = () => {
  const { dataset, id } = useParams();
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://tih-api.stb.gov.sg/content/v1/${dataset}?uuid=${id}&language=en&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetail(data.data[0]);
      });
  }, []);

  console.log(detail);

  // let imgSource = "";
  // if (detail.images.length > 0) {
  //   imgSource =
  //     detail.images[0].url === ""
  //       ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${detail.images[0].uuid}?apikey=${apiKey}`
  //       : `${detail.images[0].url}`;
  // } else {
  //   imgSource =
  //     "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg";
  // }

  return (
    <>
      <Button variant="outlined" onClick={() => navigate(`/`)}>
        Back to Explore!
      </Button>
      <br />
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            component="img"
            height="140"
            image={
              "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg"
            }
            alt={detail.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {detail.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detail.description}
            </Typography>
            <Typography>Nearest MRT: {detail.nearestMrtStation}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Official Web: {detail.officialWebsite}</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Detail;
