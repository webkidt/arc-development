import Box from '@mui/material/Box';

import footerAdornment from '../../assets/Footer Adornment.svg';

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
