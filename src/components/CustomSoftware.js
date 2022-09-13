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
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import roots from '../assets/root.svg';

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';

const ArrowContainer = styled(Grid)({ marginTop: '0.5em' });

const ItemContainer = styled(Grid)({ maxWidth: '40em' });

// const LottieDocumentAnimation = styled(Lottie)({
//   maxHeight: 325,
//   maxWidth: 275,
//   minHeight: 275,
// });

const CustomSoftware = ({ setSelectedIndex }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid
      container
      direction='column'
      sx={{
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '2em',
        paddingBottom: '10em',
      }}
    >
      <Grid
        container
        item
        direction='row'
        justifyContent={matchesMD ? 'center' : undefined}
      >
        <ArrowContainer
          item
          sx={{
            marginRight: '1em',
            marginLeft: '-3.5em',
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <IconButton
            component={Link}
            to='/services'
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            onClick={() => setSelectedIndex(0)}
          >
            <Box component='img' src={backArrow} alt='back to service page' />
          </IconButton>
        </ArrowContainer>
        <Grid container item direction='column' sx={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant='body1'
              align={matchesMD ? 'center' : undefined}
            >
              Whether we’re replacing old software or inventing new solutions, Arc
              Development is here to help your business tackle technology.
            </Typography>
            <Typography
              paragraph
              variant='body1'
              align={matchesMD ? 'center' : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff you don’t
              need, without some of the stuff you do need, and ultimately controls the way
              you work. Without using any software at all you risk falling behind
              competitors and missing out on huge savings from increased efficiency.
            </Typography>
            <Typography
              paragraph
              variant='body1'
              align={matchesMD ? 'center' : undefined}
            >
              Our custom solutions are designed from the ground up with your needs, wants,
              and goals at the core. This collaborative process produces finely tuned
              software that is much more effective at improving your workflow and reducing
              costs than generalized options.
            </Typography>
            <Typography
              paragraph
              variant='body1'
              align={matchesMD ? 'center' : undefined}
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <ArrowContainer item sx={{ display: { xs: 'none', lg: 'block' } }}>
          <IconButton
            component={Link}
            to='/mobileapps'
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            onClick={() => setSelectedIndex(2)}
          >
            <Box
              component='img'
              src={forwardArrow}
              alt='forward to iOS/Android App Development page'
            />
          </IconButton>
        </ArrowContainer>
      </Grid>
      <Grid container item direction='row' justifyContent='center' mt='15em' mb='20em'>
        <Grid
          container
          item
          md
          direction='column'
          alignItems='center'
          sx={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          container
          item
          md
          direction='column'
          alignItems='center'
          sx={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid
          container
          item
          md
          direction='column'
          alignItems='center'
          sx={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={cash} alt='cash' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent='space-between'
      >
        <ItemContainer container item md sx={{ marginBottom: matchesMD ? '15em' : 0 }}>
          <Grid container item md direction='column'>
            <Grid item>
              <Typography variant='h4'>Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='body1'>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography paragraph variant='body1'>
                Billions are spent annually on the purchasing, printing, and distribution
                of paper. On top of the massive environmental impact this has, it causes
                harm to your bottom line as well.
              </Typography>
              <Typography paragraph variant='body1'>
                By utilizing digital forms and documents you can remove these obsolete
                expenses, accelerate your communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </ItemContainer>
        <ItemContainer container item md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid container item md direction='column'>
            <Grid item>
              <Typography variant='h4' align='right'>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='body1' align='right'>
                Whether you’re a large brand, just getting started, or taking off right
                now, our application architecture ensures pain-free growth and
                reliability.
              </Typography>
            </Grid>
          </Grid>
        </ItemContainer>
      </Grid>
      <Grid container item direction='row' my='20em'>
        <Grid container item direction='column' alignItems='center'>
          <Grid item>
            <img
              src={roots}
              alt='tree with roots extending out'
              height='450em'
              width='450em'
            />
          </Grid>
          <ItemContainer>
            <Typography variant='h4' align='center'>
              Root-Cause Analysis
            </Typography>
            <Typography paragraph variant='body1' align='center'>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography paragraph variant='body1' align='center'>
              We can help you thoroughly examine all areas of your business to develop a
              holistic plan for the most effective implementation of technology.
            </Typography>
          </ItemContainer>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent='space-between'
        sx={{ marginBottom: '20em' }}
      >
        <ItemContainer container item md sx={{ marginBottom: matchesMD ? '15em' : 0 }}>
          <Grid container item md direction='column'>
            <Grid item>
              <Typography variant='h4'>Automation</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='body1'>
                Why waste time when you don’t have to?
              </Typography>
              <Typography paragraph variant='body1'>
                We can help you identify processes with time or event based actions which
                can now easily be automated.
              </Typography>
              <Typography paragraph variant='body1'>
                Increasing efficiency increases profits, leaving you more time to focus on
                your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </ItemContainer>
        <ItemContainer container item md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid container item md direction='column'>
            <Grid item>
              <Typography variant='h4' align='right'>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='body1' align='right'>
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography paragraph variant='body1' align='right'>
                So why are so many pieces of software complicated, confusing, and
                frustrating?
              </Typography>
              <Typography paragraph variant='body1' align='right'>
                By prioritizing users and the real ways they interact with technology
                we’re able to develop unique, personable experiences that solve problems
                rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </ItemContainer>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
