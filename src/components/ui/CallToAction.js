import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const BackgroundContainer = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  height: '60em',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    backgroundImage: `url(${mobileBackground})`,
    backgroundAttachment: 'inherit',
  },
  [theme.breakpoints.up('xl')]: {
    backgroundAttachment: 'inherit',
  },
}));

const CallToAction = () => {
  const theme = useTheme();

  return (
    <BackgroundContainer
      container
      sx={{
        alignItems: 'center',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        justifyContent: { xs: 'center', md: 'space-between' },
      }}
    >
      <Grid
        item
        sx={{
          marginLeft: { xs: 0, md: '5em' },
          textAlign: { xs: 'center', md: 'inherit' },
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Result.
            </Typography>
            <Typography variant='subtitle2' sx={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item sx={{ justifyContent: { xs: 'center', md: undefined } }}>
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
      <Grid item>
        <Button
          variant='contained'
          sx={theme => ({
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: theme.palette.common.orange,
            fontSize: '1.5rem',
            marginRight: { xs: 0, md: '5em' },
            marginLeft: { xs: 0, md: '2em' },
          })}
        >
          Free Estimate
        </Button>
      </Grid>
    </BackgroundContainer>
  );
};

export default CallToAction;
