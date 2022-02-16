import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import ButtonArrow from './ui/ButtonArrow';

// cSpell: disable
import animationData from '../animations/landinganimation/data';

// const Animation = styled(Lottie)({marginTop: '2em'});

const LandingPage = () => {
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid
      container
      direction='column'
      sx={{ marginTop: { xs: '2em', sm: '3em', lg: '5em' } }}
    >
      <Grid item>
        <Grid container justifyContent='flex-end' alignItems='center'>
          <Grid item sm sx={{ minWidth: '21.5em', marginLeft: { xs: '0', sm: '1em' } }}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid container justifyContent='center' mt='1em'>
              <Grid item>
                <Button
                  variant='contained'
                  sx={theme => ({
                    ...theme.typography.estimate,
                    backgroundColor: theme.palette.common.orange,
                    borderRadius: 50,
                    height: 45,
                    width: 145,
                    marginRight: '40px',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  })}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  sx={theme => ({
                    borderColor: theme.palette.common.blue,
                    color: theme.palette.common.blue,
                    borderWidth: 2,
                    textTransform: 'none',
                    borderRadius: 50,
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    height: 45,
                    width: 145,
                  })}
                >
                  <Box component='span' mr='10px'>
                    Learn More
                  </Box>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            sx={{
              maxWidth: { xs: '30em', md: '50em' },
              minWidth: '21em',
              marginTop: '2em',
              marginLeft: '10%',
            }}
          >
            <Box
              component={Lottie}
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
