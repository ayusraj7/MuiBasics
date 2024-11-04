import React from 'react'
import { Box } from '@mui/material'
import {styled} from '@mui/material'
import { Style } from '@mui/icons-material'

const StyledBox = styled(Box)(({theme})=>(
    {
        height:'250px',
        width:'250px',
    }

))

const MuiResponsivness = () => {
    //we will provide properties as object
  return (
    <>
    <Box sx={{height:'300px', 
        width:{
            xs:100, //0 
            sm:200, //600
            md:300, //900 
            lg:400, //1200
            xl:500 //1536
        }
    , bgcolor:'secondary.main'}}>

    </Box>
    <StyledBox/>
    </>

  )
}

export default MuiResponsivness