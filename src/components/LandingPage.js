import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonArrow from './ui/ButtonArrow';

// cSpell: disable
import animationData from '../animations/landinganimation/data';

// const Animation = styled(Lottie)({marginTop: '2em'});

const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justifyContent='flex-end' alignItems='center'>
          <Grid item sm>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  Learn More
                  <ButtonArrow width={15} height={15} fill='red' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            sx={{
              maxWidth: '50em',
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
