import React from "react";
import { Box, Divider, Stack } from "@mui/material";

const MuiBox = () => {
  //read about box and component,sx prop
  // why we don't use div and span because box component accept sx props which accept custom theme

  //stack component
  //   1. it is used to show layout in vertical and horizontal line
  //   2. display : flex and direction column is default.
  // 3. spacing: 1 * 8px that is the custom
  // 4. divider used to divide component divider
  return (
    <Stack
      sx={{ border: "1px solid orange" }}
      direction={"row"}
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        component={"span"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Code Evolution
      </Box>
      <Box
        display={"flex"}
        height={"100px"}
        width={"100px"}
        bgcolor={"success.light"}
        p={2}
      ></Box>
      {/* stack component */}
    </Stack>
  );
};

export default MuiBox;
