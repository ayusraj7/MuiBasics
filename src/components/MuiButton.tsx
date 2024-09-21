import React from "react";
import { Button, ButtonGroup, Icon, Stack ,ToggleButton,ToggleButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from "react";
const MuiButton = () => {
  //button colors
  //under customization click on palette you can see in custom,defaultTheme and palette

  //Button-Group Component : -->
  const [formats,setFormats]=useState<string[]>([])
  console.log('formats',formats);
  const handleFormatChange = (event:React.MouseEvent,updatedFormats:string[])=>{
    setFormats(updatedFormats);
  }
  return (
    <Stack spacing={4}>
      {/* Stack is also used for this cases only where we need to provide spacing and direction and display whose default is horizontal  */}

      <Stack spacing={2} direction="row">
        {/* button has three variants we can use 
            1. text variant  */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        {/* 2. contained */}
        <Button variant="contained">Contained</Button>
        {/* 3. outlined  */}
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* checking with color  */}
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="warning"
          startIcon={<SendIcon />}
          onClick={() => alert("clicked on button")}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="warning"
          endIcon={<SendIcon />}
          disableElevation
        >
          Send
        </Button>
      </Stack>

      {/* The Icon Button Component */}
      <IconButton
        aria-label="send"
        color="success"
        size="small"
        sx={{ width: "30px" }}
      >
        <SendIcon />
      </IconButton>

      {/* ButtonGroup Component--> variant should be displayed on buttonGroup not on button
            orientationProp --> this is used to orient the button vertically and horizontally
            we should also add aria-label props as this will help in accessiblity 
        */}

      <Stack direction="row">
        <ButtonGroup
          color="warning"
          variant="outlined"
          orientation="vertical"
          size="medium"
          aria-label="alignment Button Group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>


      {/* Toggle Button Component---> learn about exclusive,value,onchange on toggleButtonGroup   */}
      <Stack direction='row'>
        <ToggleButtonGroup color="success" aria-label="text formatting" value={formats} onChange={handleFormatChange} exclusive>
            <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>


      <ToggleButtonGroup color="success">
        <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiButton;
