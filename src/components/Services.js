import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const ServiceContainer = styled(Grid)(({ theme }) => ({
  marginTop: '10em',
  [theme.breakpoints.down('md')]: {
    padding: 25,
  },
  [theme.breakpoints.down('sm')]: {
    padding: 5,
  },
}));

const ServiceSubtitle = styled(Typography)({ marginBottom: '1em' });

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

const Services = ({ setValue, setSelectedIndex, ...props }) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        sx={{ marginLeft: matchSM ? 0 : '5em', marginTop: matchSM ? '1em' : '2em' }}
      >
        <Typography gutterBottom variant='h2' align={matchSM ? 'center' : undefined}>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/*----- iOS/Android Block -----*/}
        <ServiceContainer
          container
          justifyContent={matchSM ? 'center' : 'flex-end'}
          sx={{ mt: matchSM ? '1em' : '5em' }}
        >
          <Grid
            item
            textAlign={matchSM ? 'center' : undefined}
            width={matchSM ? undefined : '35em'}
          >
            <Typography variant='h4'>iOS/Android Development</Typography>
            <ServiceSubtitle variant='subtitle1'>
              Extend Functionality. Extend Access. Increase Engagment.
            </ServiceSubtitle>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchSM ? null : <br />} with either mobile platform.
            </Typography>
            <LearnMoreBtn
              component={Link}
              to='/mobileapps'
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item marginRight={matchSM ? '0' : '5em'}>
            <ServiceIcon alt='mobile phone icon' src={mobileIcon} width='250em' />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/*----- Custom Software Block -----*/}
        <ServiceContainer container justifyContent={matchSM ? 'center' : undefined}>
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
            <LearnMoreBtn
              component={Link}
              to='/customsoftware'
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item>
            <ServiceIcon alt='custom software icon' src={customSoftwareIcon} />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/*----- Websites Block -----*/}
        <ServiceContainer
          container
          justifyContent={matchSM ? 'center' : 'flex-end'}
          sx={{ mb: '10em' }}
        >
          <Grid
            item
            textAlign={matchSM ? 'center' : undefined}
            width={matchSM ? undefined : '35em'}
          >
            <Typography variant='h4'>Website Development</Typography>
            <ServiceSubtitle variant='subtitle1'>
              Reach More. Discover More. Sell More.
            </ServiceSubtitle>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnMoreBtn
              component={Link}
              to='/websites'
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <Box component='span' mr='10px'>
                Learn More
              </Box>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </LearnMoreBtn>
          </Grid>
          <Grid item mr={matchSM ? 0 : '5em'}>
            <ServiceIcon alt='website icon' src={websitesIcon} width='250em' />
          </Grid>
        </ServiceContainer>
      </Grid>
    </Grid>
  );
};

export default Services;
