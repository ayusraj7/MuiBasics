import React from "react";
import { AppBar,Menu, Toolbar, IconButton, Typography, Stack , Button, MenuItem } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
const MuiNavbar = () => {
    const [anchorEl,setAnchorEl]=useState<null | HTMLElement>(null);
    const open=Boolean(anchorEl);
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
    
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction={'row'} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" id='resources-button' 
            onClick={handleClick} 
            aria-controls={open ? 'resources-menu':undefined}
            aria-expanded={open?'true':undefined}
            endIcon={<KeyboardArrowDown/>}
            >Resources</Button>
            <Button color="inherit">Login</Button>
        
        </Stack>
        <Menu open={open} id='resources-menu' 
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
          }}
          onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
        
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
