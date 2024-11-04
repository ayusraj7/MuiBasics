import React from 'react'
import { Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiBadge = () => {
    //learn about showZero prop
    //learn about default badge value and max prop ,variant , invisible
  return (
    <Stack spacing={2} m={4} direction={'row'}>
         <Badge badgeContent={5} color='primary'>
            <MailIcon/>
         </Badge>
         <Badge badgeContent={5} color='secondary' showZero>
            <MailIcon/>
         </Badge>
         <Badge variant={'dot'} color='secondary' >
            <MailIcon/>
         </Badge>
         <Badge variant={'dot'} color='secondary' invisible={true} >
            <MailIcon/>
         </Badge>
    </Stack>
  )
}

export default MuiBadge