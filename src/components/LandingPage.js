// cSpell: disable
import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

// import CallToAction from './ui/CallToAction';
import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

// const ServiceTitle = styled(Typography)({});

const ServiceSubtitle = styled(Typography)({ marginBottom: '1em' });

// const ServiceSubtext = styled(({ ...props }) => (
//   <Typography variant='subtitle1' {...props} />
// ))({});

const LearnMoreBtn = styled(Button)(({ theme }) => ({
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

const RevolutionBackground = styled('div')({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
});

const InfoBackground = styled('div')({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
});

const LandingPage = () => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('md'));
  // const matchXS = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
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
        {/*----- Custom Software Block -----*/}
        <Grid
          container
          justifyContent={matchSM ? 'center' : undefined}
          sx={{ marginTop: '12em', padding: { xs: '5px', sm: '25px', md: 'unset' } }}
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
            <LearnMoreBtn variant='outlined'>
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item>
            <ServiceIcon alt='custom software icon' src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- iOS/Android Block -----*/}
        <Grid
          container
          justifyContent={matchSM ? 'center' : 'flex-end'}
          sx={{ marginTop: '12em', padding: { xs: '5px', sm: '25px', md: 'unset' } }}
        >
          <Grid item textAlign={matchSM ? 'center' : undefined}>
            <Typography variant='h4'>iOS/Android Development</Typography>
            <ServiceSubtitle variant='subtitle1'>
              Extend Functionality. Extend Access. Increase Engagment.
            </ServiceSubtitle>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchSM ? null : <br />} with either mobile platform.
            </Typography>
            <LearnMoreBtn variant='outlined'>
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item marginRight={matchSM ? '0' : '5em'}>
            <ServiceIcon alt='mobile phone icon' src={mobileIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Websites Block -----*/}
        <Grid
          container
          justifyContent={matchSM ? 'center' : undefined}
          sx={{ marginTop: '12em', padding: { xs: '5px', sm: '25px', md: 'unset' } }}
        >
          <Grid
            item
            marginLeft={matchSM ? '0' : '5em'}
            textAlign={matchSM ? 'center' : undefined}
          >
            <Typography variant='h4'>Website Development</Typography>
            <ServiceSubtitle variant='subtitle1'>
              Reach More. Discover More. Sell More.
            </ServiceSubtitle>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnMoreBtn variant='outlined'>
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item>
            <ServiceIcon alt='website icon' src={websitesIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- The Revolution Block -----*/}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100em', marginTop: '12em' }}
        >
          <Card
            sx={{
              position: 'absolute',
              boxShadow: theme => theme.shadows[10],
              borderRadius: { xs: 0, md: '15px' },
              paddingTop: { xs: '8em', md: '10em' },
              paddingBottom: { xs: '8em', md: '10em' },
              paddingLeft: { xs: '0', md: '10em' },
              paddingRight: { xs: 0, md: '10em' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <CardContent>
              <Grid container direction='column' sx={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a recipe
                    for revolution.
                  </Typography>
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
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <RevolutionBackground />
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Information Block -----*/}
        <Grid container alignItems='center' sx={{ height: '80em' }}>
          <Grid
            container
            sx={{
              position: 'absolute',
              flexDirection: { xs: 'column', sm: 'row' },
              textAlign: { xs: 'center', sm: 'inherit' },
              rowGap: { xs: 10, sm: 0 },
            }}
          >
            <Grid item sm sx={{ marginLeft: { xs: 0, sm: '2em', md: '5em' } }}>
              <Grid container direction='column'>
                <Typography variant='h2' sx={{ color: '#FFFFFF' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <LearnMoreBtn
                    variant='outlined'
                    sx={{ color: 'white', borderColor: 'white' }}
                  >
                    <Box component='span' mr='10px'>
                      Learn More
                    </Box>
                    <ButtonArrow width={10} height={10} fill='#FFFFFF' />
                  </LearnMoreBtn>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              sx={{
                marginRight: { xs: 0, sm: '2em', md: '5em' },
                textAlign: { xs: 'center', sm: 'right' },
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' sx={{ color: '#FFFFFF' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Say hello!{' '}
                  <span role='img' aria-label='waving hand'>
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <LearnMoreBtn
                    variant='outlined'
                    sx={{ color: 'white', borderColor: 'white' }}
                  >
                    <Box component='span' mr='10px'>
                      Learn More
                    </Box>
                    <ButtonArrow width={10} height={10} fill='#FFFFFF' />
                  </LearnMoreBtn>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <InfoBackground />
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Call To Action Block -----*/}
        {/* <CallToAction /> */}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
