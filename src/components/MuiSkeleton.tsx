import React from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
const MuiSkeleton = () => {
  //learn about prop variant
  //byDefault animation is pulse animation
  //animation='wave',animation='false',
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },3000)
  })
  return (
    // <Stack spacing={1} width={"250px"}>
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width={40} height={40}></Skeleton>
    //   <Skeleton
    //     variant="rectangular"
    //     width={250}
    //     height={125}
    //     animation="wave"
    //   ></Skeleton>
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton variant="rectangular" width={256} height={144} animation="wave"/>
      ) : (
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"  alt="skeleton" width={256} height={256} />
      )}
      <Stack direction={"row"} spacing={1} sx={{ width: "100%", marginTop: "12px" }} >
        {loading ? (
          <Skeleton variant="circular" width={40} height={40} animation="wave" />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{width:'80%'}}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width={"100%"} animation="wave" />
              </Typography>
              <Typography variant="body1">
                <Skeleton variant="text" width={"100%"} animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
