import React from "react";
import { Stack, Box, Divider,Grid,Paper } from "@mui/material";

const MuiPaper = () => {
  return (
    <Paper elevation={8} sx={{padding:'32px',background:'#eeeeee',height:'100vh',width:'100vw'}}>
      <Stack
        sx={{ border: "none",background:'white' }}
        direction={"row"}
        spacing={2}
        height={'600px'}
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
    </Paper>
  );
};

export default MuiPaper;
