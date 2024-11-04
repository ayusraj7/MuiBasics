import React from "react";
import { Box, Card, CardContent, Typography , Button,CardActions, CardMedia } from "@mui/material";

const MuiCard = () => {
  return (
    <Box
      bgcolor={"grey"}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "300px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript Library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardMedia
          component={'img'}
          height='140'
          image="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg"
          alt="unsplash image"
         >
        </CardMedia>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
