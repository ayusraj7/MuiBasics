import React from "react";
import { Stack, Snackbar, Button } from "@mui/material";
import { useState } from "react";

const MuiSnackBar = () => {
  //learn about message and autoHideDuration prop
  const [open,setOpen]=useState(false);
  const handleClose=(event?: React.SyntheticEvent | Event, reason?: string)=>{
    if(reason ==='clickaway'){
        return;
    }
    setOpen(false);
  }

  return (
    <>
      <Button onClick={()=>setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form Submitted Successfully!"
        autoHideDuration={900}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
      ></Snackbar>
    </>
  );
};

export default MuiSnackBar;

