import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
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

const Header = props => {
  return (
    <React.Fragment>
      <ElevationOnScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Box component='img' src={logo} alt='logo' sx={{ height: '7em' }} />
          </Toolbar>
        </AppBar>
      </ElevationOnScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
