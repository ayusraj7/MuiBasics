import { Stack ,TextField ,InputAdornment } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <TextField label="name" variant='outlined'/>
            <TextField label="name" variant='filled'/>
            <TextField label="name" variant='standard'/>
        </Stack>
        <Stack sx={{width:'300px'}}>
            <TextField label='Small secondary' defaultValue={'Lakshya'} size='small' color='secondary' />
        </Stack>

        {/* Now for input Field required and helper text ,type is also there. */}
        <Stack direction={'row'} spacing={2}>
            <TextField label='Form Input'
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            error={!value}

            required 
             helperText={!value ? 'Required' :'Do not share your password with anyone'}
             type='password'
             
             />

              {/* readOnly , InputProps */}
              <TextField label='Read Only' InputProps={{ readOnly: true}}/>

        </Stack>
        <Stack direction={'row'} spacing={3}>
             {/* InputAdornment, endAdornment */}
             <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' error
               InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
               }}
            />
        </Stack>

    </Stack>

  )
}

export default MuiTextField