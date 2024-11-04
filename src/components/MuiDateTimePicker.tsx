import React from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { useState } from "react";

const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
        Hello
      <DatePicker
        label="Date Picker"
        renderInput={(params:any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue:Date | null)=>{
            setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiDateTimePicker;
