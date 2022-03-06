import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
// import mobileBackground from '../../assets/mobileBackground.jpg';

const Background = styled('div')(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}));

const CallToAction = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Result.
            </Typography>
            <Typography variant='subtitle2'>
              Take advantage of the 21st Century.
            </Typography>
            <Grid item>
              <Button
                variant='outlined'
                sx={theme => ({
                  ...theme.typography.learnButton,
                  fontSize: '0.7rem',
                  height: 35,
                  padding: '5px',
                  marginBottom: { xs: '2em', md: 'auto' },
                })}
              >
                <Box component='span' mr='5px'>
                  Learn More
                </Box>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Background />
    </Grid>
  );
};

export default CallToAction;
