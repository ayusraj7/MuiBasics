import React from 'react'
import { Box, Breadcrumbs,Link,Typography} from '@mui/material'
import { NavigateNext } from '@mui/icons-material'

const MuiBreadCrumbs = () => {
    //learn about separator ,maxItems,ItemsBeforeCollapse,ItemsAfterCollapse
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb'
         maxItems={2}
         itemsAfterCollapse={2}
         separator={<NavigateNext/>}>
           <Link underline='hover' href=''>Home</Link>
           <Link underline='hover' href='#'>Catalog</Link>
           <Link underline='hover' href='#'>Accessories</Link>
           <Typography>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadCrumbs