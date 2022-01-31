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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
    setAnchorEl(null);
    console.log(selectedIndex);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) setValue(0);
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) setValue(2);
        break;
      case '/about':
        if (value !== 3) setValue(3);
        break;
      case '/contact':
        if (value !== 4) setValue(4);
        break;
      case '/estimate':
        if (value !== 5) setValue(5);
        break;
      default:
        break;
    }
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
              elevation={0}
              MenuListProps={{ onMouseLeave: handleClose }}
              sx={theme => ({
                '& .MuiMenu-paper': {
                  backgroundColor: theme.palette.common.blue,
                  color: '#FFFFFF',
                },
              })}
              onClose={handleClose}
            >
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={option.name}
                  component={Link}
                  to={option.link}
                  sx={theme => ({
                    ...theme.typography.tab,
                    opacity: 0.7,
                    '&:hover': {
                      opacity: 0.9,
                      backgroundColor: '#4444441A',
                    },
                    '&.Mui-selected': {
                      opacity: 1,
                      backgroundColor: 'action.selected',
                    },
                  })}
                  selected={index === selectedIndex}
                  onClick={event => {
                    handleMenuItemClick(event, index);
                    setValue(1);
                    handleClose();
                  }}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationOnScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
