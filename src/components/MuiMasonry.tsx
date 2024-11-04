import React from "react";
import { Box, Paper , Accordion,AccordionSummary,AccordionDetails , Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 90, 100, 150, 30, 50, 80];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid black",
            }}
          >
           <Accordion sx={{minHeight:height}}>
             <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accorion {index+1}</Typography>
             </AccordionSummary>
             <AccordionDetails>Content</AccordionDetails>
           </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
