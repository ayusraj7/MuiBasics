import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  //learn about variant='square',variant='rounded'
  //styledBadge,Badge,max,renderSurplus,total,AvatarGroup
  return (
    <Stack spacing={4} p={2}>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack spacing={1} direction={"row"}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="john doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="bhanu"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
