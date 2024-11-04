import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

const MuiToolTip = () => {
  //learn about title prop, placement ,arrow,enterDelay,leaveDelay
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={400}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiToolTip;
