import React from "react";
import { Stack, Alert, AlertTitle ,Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  //learn about severity prop,variant
  //AlertTitle
  //icon prop , action prop
  return (
    <Stack spacing={2} m={5}>
      <Alert severity="error">Put that rupees down </Alert>
      <Alert severity="warning">This is an warning Alert</Alert>
      <Alert severity="info"> This is an info Alert</Alert>
      <Alert severity="success"> This is an success alert </Alert>

      <Alert
        variant="outlined"
        severity="error"
        onClose={() => alert("close Alert")}
      >
        Put that rupees down{" "}
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning Alert
      </Alert>
      <Alert variant="outlined" severity="info">
        {" "}
        This is an info Alert
      </Alert>
      <Alert variant="outlined" severity="success">
        {" "}
        This is an success alert{" "}
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        icon={<CheckIcon fontSize="inherit" />}
      >
        <AlertTitle>Error</AlertTitle>
        Put that rupees down{" "}
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning Alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert
      </Alert>
      <Alert variant="filled" severity="success" action={<button color='inerhit'>UNDO</button>}>
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
