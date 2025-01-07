import{Typography} from '@mui/material'

export default function MuiTypography() {
  return (
    <div>
      <Typography variant='h1'>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3'>h3 heading</Typography>
      <Typography variant='h4'>h4 heading</Typography>
      <Typography variant='h5' component='h1'gutterBottom>h5 heading</Typography>
      <Typography variant='h6'>h6 heading</Typography>
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      <Typography variant='body1'>{/*the material ui have the default body 1*/ }
        What were the chances? It would have to be a lot more than 100 to 1.
         It was likely even more than 1,000 to 1. The more he thought about it, 
         the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. 
         People often threw around the chances of something happening as being 1,000,000 to 
         1 as an exaggeration of an unlikely event, but he could see that they may actually
          be accurate in this situation. Whatever the odds of it happening, he knew they were big.
         What he didn't know was whether this happening was lucky or unlucky.</Typography>
      <Typography variant='body2'>
      What were the chances? It would have to be a lot more than 100 to 1.
         It was likely even more than 1,000 to 1. The more he thought about it, 
         the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. 
         People often threw around the chances of something happening as being 1,000,000 to 
         1 as an exaggeration of an unlikely event, but he could see that they may actually
          be accurate in this situation. Whatever the odds of it happening, he knew they were big.
         What he didn't know was whether this happening was lucky or unlucky
      </Typography>
    </div>
  );
}
