import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';

// cSpell: disable
import animationData from '../animations/landinganimation/data';

// const ServiceTitle = styled(Typography)({});

const ServiceSubtitle = styled(Typography)({ marginBottom: '1em' });

// const ServiceSubtext = styled(({ ...props }) => (
//   <Typography variant='subtitle1' {...props} />
// ))({});

const ServiceLearnBtn = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: '0.7rem',
  height: 35,
  padding: 5,
  [theme.breakpoints.down('md')]: {
    marginBottom: '2em',
  },
}));

const ServiceIcon = styled('img')(({ theme }) => ({
  marginLeft: '2em',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));

const LandingPage = () => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('md'));

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
        {/*----- Hero Block -----*/}
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
                    ...theme.typography.learnButton,
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
      <Grid item>
        {/*----- Services Block -----*/}
        <Grid
          container
          justifyContent={matchSM ? 'center' : undefined}
          sx={{ marginTop: '12em', padding: { xs: '25px', md: '0' } }}
        >
          <Grid
            item
            marginLeft={matchSM ? '0' : '5em'}
            textAlign={matchSM ? 'center' : undefined}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <ServiceSubtitle variant='subtitle1'>
              Save Energy. Save Time. Save Money.
            </ServiceSubtitle>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <Box
                component='span'
                sx={{
                  fontFamily: 'Pacifico',
                  color: theme => theme.palette.common.orange,
                }}
              >
                celebration.
              </Box>
            </Typography>
            <ServiceLearnBtn variant='outlined'>
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </ServiceLearnBtn>
          </Grid>
          <Grid item>
            <ServiceIcon alt='custom software icon' src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
