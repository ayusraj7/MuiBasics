import React from "react";
import { Grid, Box, Stack, Divider } from "@mui/material";

const MuiGrid = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
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
          Codevolution
        </Box>
      </Stack>
      {/* check for auto without value  */}
      <Grid container my={4} mx={5} spacing={1} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
            <Box bgcolor={'success.light'} p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6} md={4}>
            <Box bgcolor={'primary.light'} p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6} >
            <Box bgcolor={'error.light'} p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor={'secondary.light'} p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiGrid;
