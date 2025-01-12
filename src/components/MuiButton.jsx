import React from 'react';
import { Button, Stack,IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export default function MuiButton() {
  const [formats,setFormats]= useState(0)
  console.log(formats)
  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats) || null
  };
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
     <Stack direction='row'>
      {/*The variant should only be apply to button group and not the individual buttons*/}
      <ButtonGroup variant='outlined' orientation='vertical' size='small' color='success' aria-label='alignment button group'>
        <Button onClick={()=>alert("Left button is clicked")}>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
     </Stack>
     <Stack direction='row'>
     <ToggleButtonGroup 
     aria-label='text-formatting' 
     value={formats}
      onChange={handleFormatChange}
      size='small'
      color='warning'
      exclusive
      orientation='vertical'
     >
      <ToggleButton value='bold' aria-label='bold'>
        <FormatBoldIcon/>
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <FormatItalicIcon/>
      </ToggleButton>
      <ToggleButton value='underlined' aria-label='underlined'>
        <FormatUnderlinedIcon/>
      </ToggleButton>
     </ToggleButtonGroup>
     </Stack>
     </Stack>
    </div>
  );
}
