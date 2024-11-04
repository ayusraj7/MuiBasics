import React from 'react'
import { Autocomplete,Stack,TextField} from '@mui/material'
import { useState } from 'react'

const MuiAutoComplete2 = () => {
    //there is two mandoratory props 1. array(options) 2. renderInput which renders the input
    //when we write inside renderInput then it shows list of suggestions present inside that
    // to allow freetext we use freeSolo text here we can write our options also
    // how to give an array of objects. 
    const skills=['HTML','CSS','JavaScript','TypeScript','React']
    const [value,setValue]=useState<string | null>(null)
    const [skill,setSkill]=useState<Skill | null>(null);
    const handleChange=(event:any , newValue: string | null)=>{
        setValue(newValue);
    }
    interface Skill{
        id:number
        label:string
    }

    const skillOptions = skills.map((skill,index)=>({
        id:index+1,
        label:skill
    }))
    console.log('value',value);
    console.log('skill',skill);
  return (
    <Stack spacing={2} width={'250px'}>
        <Autocomplete
          options={skills}
          value={value}
          onChange={handleChange}
          freeSolo
          renderInput={(params)=><TextField {...params} label='Skills' />}
        />
        <Autocomplete
          options={skillOptions}
          value={skill}
          onChange={(event:any,newValue:Skill | null)=>setSkill(newValue)}
          renderInput={(params)=><TextField {...params} label='Skills' />}
        />

    </Stack>
  )
}

export default MuiAutoComplete2