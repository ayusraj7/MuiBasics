import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  //learn about variant , progress
  return (
    <Stack>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="secondary" variant="determinate" value={60} />
      Linear Progress
      <Stack spacing={3}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="secondary" variant="determinate" value={60} />
      </Stack>
    </Stack>
  );
};

export default MuiProgress;
