import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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

// cSpell: disable
const Header = props => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) setValue(0);
    else if (window.location.pathname === '/services' && value !== 1) setValue(1);
    else if (window.location.pathname === '/revolution' && value !== 2) setValue(2);
    else if (window.location.pathname === '/about' && value !== 3) setValue(3);
    else if (window.location.pathname === '/contact' && value !== 4) setValue(4);
    else if (window.location.pathname === '/estimate' && value !== 5) setValue(5);
  }, [value]);

  return (
    <React.Fragment>
      <ElevationOnScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              // disableRipple
              sx={{ padding: 0, '&:hover': { backgroundColor: 'transparent' } }}
              onClick={() => setValue(0)}
            >
              <Box component='img' src={logo} alt='logo' sx={{ height: '8em' }} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              indicatorColor='primary'
              sx={{ marginLeft: 'auto' }}
            >
              <HeaderTab component={Link} to='/' label='Home' />
              <HeaderTab
                aria-controls={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                aria-expanded={open ? 'true' : undefined}
                component={Link}
                to='/services'
                label='Services'
                onMouseOver={handleClick}
              />
              <HeaderTab component={Link} to='/revolution' label='The Revolution' />
              <HeaderTab component={Link} to='/about' label='About Us' />
              <HeaderTab component={Link} to='/contact' label='Contact Us' />
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
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ onMouseLeave: handleClose }}
              onClose={handleClose}
            >
              <MenuItem
                component={Link}
                to='/services'
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Services
              </MenuItem>
              <MenuItem
                component={Link}
                to='/customsoftware'
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                component={Link}
                to='/mobileapps'
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                component={Link}
                to='/websites'
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationOnScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
