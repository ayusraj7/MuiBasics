import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";
const MuiChip = () => {
  //learn about onClick,variant,onDelete,href along with component ,deleteIcon
  //most important learn about avatar prop
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chip: string) => {
    const ans = chips?.filter((item) => item !== chip);
    setChips(ans);
  };

  return (
    <Stack direction={"row"} spacing={1} m={4}>
      <Chip label={"chip"} color="secondary" size="medium" />
      <Chip
        label={"chip outlined"}
        color="secondary"
        size="medium"
        variant="outlined"
        icon={<FaceIcon />}
      />
      <Chip
        label={"chip outlined"}
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
        onClick={() => alert("clicked")}
      />
      <Chip
        label={"delete"}
        color="error"
        onDelete={() => alert("delete Handler called")}
      />
      {chips?.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
