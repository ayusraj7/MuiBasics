import React from "react";
import {
  Stack,
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
const MuiList = () => {
  //learn about primary,secondary,ListItemButton,disabledPadding in ListItem when we use ListItemButton
  return (
    <Box sx={{ width: "400px", bgcolor: "efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 1"
              secondary="secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="item2"></ListItemText>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="item3"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
