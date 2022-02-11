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

const Footer = ({ setValue, setSelectedIndex, ...props }) => {
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
            <FooterLink component={Link} to='/' onClick={() => setValue(0)}>
              Home
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink
              component={Link}
              to='/services'
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </FooterLink>
            <FooterLink
              component={Link}
              to='/customsoftware'
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </FooterLink>
            <FooterLink
              component={Link}
              to='/mobileapps'
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </FooterLink>
            <FooterLink
              component={Link}
              to='/websites'
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Website Development
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/revolution' onClick={() => setValue(2)}>
              The Revolution
            </FooterLink>
            <FooterLink component={Link} to='/revolution' onClick={() => setValue(2)}>
              Vision
            </FooterLink>
            <FooterLink component={Link} to='/revolution' onClick={() => setValue(2)}>
              Technology
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/about' onClick={() => setValue(3)}>
              About Us
            </FooterLink>
            <FooterLink component={Link} to='/about' onClick={() => setValue(3)}>
              History
            </FooterLink>
            <FooterLink component={Link} to='/about' onClick={() => setValue(3)}>
              Team
            </FooterLink>
          </Grid>
        </GridItemWrapper>
        <GridItemWrapper>
          <Grid container direction='column' spacing={2}>
            <FooterLink component={Link} to='/contact' onClick={() => setValue(4)}>
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
