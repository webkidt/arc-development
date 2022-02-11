import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

import footerAdornment from '../../assets/Footer Adornment.svg';

const FooterLink = styled(({ item, ...props }) => <Grid item {...props} />)({
  color: '#FFFFFF',
  fontFamily: 'Arial',
  fontSize: '0.75em',
  fontWeight: 'bold',
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
        <Grid item>
          <Grid container direction='column'>
            <FooterLink>Home</FooterLink>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <FooterLink>Services</FooterLink>
            <FooterLink>Custom Software Development</FooterLink>
            <FooterLink>Mobile App Development</FooterLink>
            <FooterLink>Website Development</FooterLink>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <FooterLink>The Revolution</FooterLink>
            <FooterLink>Vision</FooterLink>
            <FooterLink>Technology</FooterLink>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <FooterLink>About Us</FooterLink>
            <FooterLink>History</FooterLink>
            <FooterLink>Team</FooterLink>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <FooterLink>Contact Us</FooterLink>
          </Grid>
        </Grid>
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
