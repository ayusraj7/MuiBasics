import React, { ReactHTMLElement, useState } from 'react'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'

const options=[
    {id:1,name:'ayush'},
    {id:2,name:'divya'},
    {id:3,name:'rajput'},
    {id:4,name:'raj'}
]

const MuiAutoComplete = () => {
    const [open,setOpen]=useState(false);
    const handleClose=()=>{
        console.log('hello is clicekd')
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleChange=(event:React.SyntheticEvent,value:any)=>{
        console.log('value',value);
        console.log('change is clicked')
    }

  return (
    <div>
        <Autocomplete
          onChange={handleChange}
          options={options}
          getOptionLabel={(option)=>option.name}
          isOptionEqualToValue={(option,value)=>option.name === value.name}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          closeText={'hello'}
          renderInput={(params)=>(
            <TextField
              {...params}
              label='Label'
              slotProps={{
                input:{
                    ...params.InputProps,
                    endAdornment:(
                        <React.Fragment>
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    )
                }
              }}
            />
          )}
          sx={{
            width:"300px",
            marginLeft:"15px"
          }}
        />


    </div>
  )
}

export default MuiAutoComplete