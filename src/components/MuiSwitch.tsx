import React from 'react'
import { Box,Switch,FormControlLabel } from '@mui/material'
import { useState } from 'react';

const MuiSwitch = () => {
    const [checked,setChecked]=useState(true);
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(event?.target.checked)
    }
    console.log('checked',checked)
  return (
    <Box>
        <FormControlLabel label='Dark Mode'control={<Switch color='success' defaultChecked checked={checked} onChange={handleChange} />}/>
    </Box>
  )
}

export default MuiSwitch