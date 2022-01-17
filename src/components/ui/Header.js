import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';

import logo from '../../assets/logo.svg';

const ElevationOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
};

const ToolbarMargin = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}));

const HeaderTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
}));

const Header = props => {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationOnScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Box component='img' src={logo} alt='logo' sx={{ height: '7em' }} />
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              indicatorColor='primary'
              sx={{ marginLeft: 'auto' }}
            >
              <HeaderTab label='Home' />
              <HeaderTab label='Services' />
              <HeaderTab label='The Revolution' />
              <HeaderTab label='About Us' />
              <HeaderTab label='Contact Us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              sx={theme => ({
                ...theme.typography.estimate,
                borderRadius: '50px',
                marginLeft: '50px',
                marginRight: '25px',
                height: '45px',
              })}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationOnScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
