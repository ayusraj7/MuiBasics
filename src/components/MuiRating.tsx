import React from 'react'
import { Rating,Stack } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {
    const[value,setValue]=useState<number | null>(2);
    const handleChange=(event:React.ChangeEvent<{}>,newValue:number | null)=>{
        console.log('newValue',newValue)
        setValue(newValue);
    }

    //learn about precision prop
    // learn about icon,emptyIcon,readOnly,highlightSelectedOnly
  return (
    <Stack spacing={2}>
       <Rating value={value} 
       onChange={handleChange} 
       precision={0.5}
       icon={<FavoriteIcon fontSize='inherit'/>}
       emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
       readOnly
    //    highlightSelectedOnly
       />
    </Stack>
  )
}

export default MuiRating