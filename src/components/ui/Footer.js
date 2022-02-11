import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

import footerAdornment from '../../assets/Footer Adornment.svg';

// cSpell: disable
const GridItemWrapper = styled(({ ...props }) => <Grid item {...props} />)({
  margin: '3em',
});

const FooterLink = styled(({ ...props }) => <Grid item {...props} />)({
  color: '#FFFFFF',
  fontFamily: 'Arial',
  fontSize: '0.75em',
  fontWeight: 'bold',
  textDecoration: 'none',
});

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme => theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative',
      }}
    >
      <Grid container justifyContent='center' sx={{ position: 'absolute' }}>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/'>
              Home
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/services'>
              Services
            </FooterLink>
            <FooterLink component={Link} to='/customsoftware'>
              Custom Software Development
            </FooterLink>
            <FooterLink component={Link} to='/mobileapps'>
              Mobile App Development
            </FooterLink>
            <FooterLink component={Link} to='/websites'>
              Website Development
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/revolution'>
              The Revolution
            </FooterLink>
            <FooterLink component={Link} to='/revolution'>
              Vision
            </FooterLink>
            <FooterLink component={Link} to='/revolution'>
              Technology
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/about'>
              About Us
            </FooterLink>
            <FooterLink component={Link} to='/about'>
              History
            </FooterLink>
            <FooterLink component={Link} to='/about'>
              Team
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/contact'>
              Contact Us
            </FooterLink>
          </Grid>
        </GridItemWrapper>
      </Grid>
      <Box
        component='img'
        alt='black decorative slash'
        src={footerAdornment}
        sx={{ width: { xs: '15em', sm: '21em', md: '25em' }, verticalAlign: 'bottom' }}
      />
    </Box>
  );
};

export default Footer;
