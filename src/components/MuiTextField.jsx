import React from 'react';
import {Stack, TextField} from '@mui/material'

export default function MuiTextField() {
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
    </Stack>
  );
}
