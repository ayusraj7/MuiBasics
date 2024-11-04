import React, { useState } from 'react'
import { Box , TextField , MenuItem } from '@mui/material'

const MuiSelect = () => {
    //select component : 
    // for option menuItem component is used. 
    // If we need to make select to multiSelect then we need  to
    // specify SelectProps and then make mutliple true 
    const [country,setCountry]=useState<string>('');//for multiple true we need to make it array 
    const [countries,setCountries]=useState<string[]>([])

    const handleChange=(event:any)=>{
        setCountries(event?.target.value);
    }
    console.log('country',country)
    console.log('countries',countries)
  return (
    <Box width={'250px'} sx={{marginLeft:'10%'}}>
        <TextField label='select Country' select fullWidth value={countries} 
        onChange={handleChange}  SelectProps={{multiple:true}} 
        size='small'
        helperText='Please Select Your Country'
        color='secondary'
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US' onClick={()=>console.log('clicked')}>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect