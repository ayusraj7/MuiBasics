import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //learn about textColor,centered prop,indicatorColor,variant,scrollButtons prop
  //icon on Tab,disabled,iconPosition
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" , width:'300px' }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            
            indicatorColor="secondary"
          >
            <Tab label="Tab One" value="1" icon={<FavoriteIcon />} iconPosition="start" />
            <Tab label="Tab Two" value="2" disabled/>
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
