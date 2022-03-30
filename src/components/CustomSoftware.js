import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

// const BackArrowImage = styled('img')({});

const CustomSoftware = () => {
  return (
    <Grid container direction='column'>
      <Grid container item direction='row'>
        <Grid item>
          <IconButton>
            <Box component='img' src={backArrow} alt='back to service page' />
          </IconButton>
        </Grid>
        <Grid container item direction='column'>
          <Grid item>
            <Typography variant='h2'>Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant='body1'>
              Whether we’re replacing old software or inventing new solutions, Arc
              Development is here to help your business tackle technology.
            </Typography>
            <Typography paragraph variant='body1'>
              Using regular commercial software leaves you with a lot of stuff you don’t
              need, without some of the stuff you do need, and ultimately controls the way
              you work. Without using any software at all you risk falling behind
              competitors and missing out on huge savings from increased efficiency.
            </Typography>
            <Typography paragraph variant='body1'>
              Our custom solutions are designed from the ground up with your needs, wants,
              and goals at the core. This collaborative process produces finely tuned
              software that is much more effective at improving your workflow and reducing
              costs than generalized options.
            </Typography>
            <Typography paragraph variant='body1'>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <Box
              component='img'
              src={forwardArrow}
              alt='forward to iOS/Android App Development page'
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
