import { Stack,Link } from '@mui/material'
import React from 'react'

const MuiLink = () => {
    //link component has three props mainly used 1. color 2. underline
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>Link</Link>
        <Link href='#' color='error' underline='hover' >Hover on Underline</Link>
        
    </Stack>
  )
}

export default MuiLink