import React from "react";
import { memo } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTC, setAcceptTC] = useState(false);
  const handleChange = () => {
    setAcceptTC(!acceptTC);
  };
  const [skills,setSkills]=useState<string[]>([])
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const index = skills.indexOf(event?.target.value);
    if(index === -1)
    {
      setSkills([...skills,event.target.value])
    }else{
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }
   console.log('checkbox is rendering on every render')

  //learn about checked pro
  // use icons as checkbox
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          onChange={handleChange}
          control={
            <Checkbox
              size='small'
              color="secondary"
              checked={acceptTC}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon style={{ color: "red" }} />}
            />
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  value={'html'}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                  value={'css'}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes('JavaScript')}
                  onChange={handleSkillChange}
                  value={'JavaScript'}
                />
              }
            />

          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default memo(MuiCheckbox);
