import React from 'react';
import { Button, Stack } from '@mui/material';

export default function MuiButton() {
  return (
    <div>
        <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://www.youtube.com/watch?v=fgTLgz1xSn8'>text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
        </Stack>
       
    </div>
  );
}
