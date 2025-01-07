import React from 'react';
import { Button, Stack,IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MuiButton() {
  return (
    <div>
     <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://www.youtube.com/watch?v=fgTLgz1xSn8'>text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'> primary </Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='error'>error</Button>
        </Stack>
        <Stack spacing={2} direction='row' display='block'>{/*the muiis flex by default*/}
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
        <Button variant='contained'startIcon={<SendIcon/>}color='error' disableRipple
          onClick={()=> alert('button is clicked')}>send</Button>
        <Button variant='contained'endIcon={<SendIcon/>} color='error' disableElevation>send</Button>
        <IconButton aria-label='send'>
          <SendIcon color='success'fontSize='small' />
        </IconButton>
     </Stack>
     </Stack>
    </div>
  );
}
