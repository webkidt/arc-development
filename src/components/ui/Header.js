import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
};

const Header = props => {
  return (
    <ElevationOnScroll {...props}>
      <AppBar position='fixed'>
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationOnScroll>
  );
};

export default Header;
