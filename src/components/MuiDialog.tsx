import React from "react";
import { useState } from "react";
import {
  Stack,
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack spacing={2} m={7}>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        aria-label="dialog-title"
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default MuiDialog;
