import React from 'react';
import {Stack, TextField} from '@mui/material'
import { useState } from 'react';

export default function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='name' variant='outlined'/>
        <TextField label='name' variant='filled'/>
        <TextField label='name' variant='standard'/>
      </Stack>
      <Stack spacing={2} direction='row'>
      <TextField label='Small secondary' size='small' color='secondary'/>
      </Stack>
      <Stack spacing={2} direction='row'>
      <TextField label='Form Input'  
      required
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      error={!value}
      helperText={
      !value ? 'Required' : 'Do not share your password with anyone'
      }/>
      <TextField
      label="Password"
      type='password'
      helperText="Do not share your password with anyone"
      
      />
      </Stack>
    </Stack>
  );
}
