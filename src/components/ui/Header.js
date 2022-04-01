import React, { useState, useEffect, useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
  [theme.breakpoints.down('lg')]: {
    marginBottom: '2em',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.25em',
  },
}));

const DrawerItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
    opacity: 1,
  },
}));

const DrawerItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  color: '#FFFFFF',
  opacity: 0.7,
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex, ...props }) => {
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const openMenu = Boolean(anchorEl);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
    setAnchorEl(null);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  const menuOptions = useMemo(
    () => [
      { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
      {
        name: 'Custom Software Development',
        link: '/customsoftware',
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: 'iOS/Android App Development',
        link: '/mobileapps',
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: 'Website Development',
        link: '/websites',
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      { name: 'Home', link: '/', activeIndex: 0 },
      {
        name: 'Services',
        link: '/services',
        activeIndex: 1,
        ariaControls: anchorEl ? 'simple-menu' : undefined,
        ariaHaspopup: anchorEl ? 'true' : undefined,
        ariaExpanded: openMenu ? 'true' : undefined,
        mouseOver: handleClick,
      },
      { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
      { name: 'About Us', link: '/about', activeIndex: 3 },
      { name: 'Contact Us', link: '/contact', activeIndex: 4 },
      // { name: 'Estimate', link: '/estimate', activeIndex: 5 },
    ],
    [anchorEl, openMenu]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, setValue, menuOptions, selectedIndex, setSelectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        indicatorColor='primary'
        sx={{ marginLeft: 'auto' }}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            component={Link}
            to={route.link}
            label={route.name}
            aria-controls={route.ariaControls}
            aria-haspopup={route.ariaHaspopup}
            aria-expanded={route.ariaExpanded}
            // sx={theme => ({
            //   ...theme.typography.tab,
            //   minWidth: 10,
            //   marginLeft: '25px',
            //   display: index === 5 ? 'none' : 'inline-flex',
            // })}
            onMouseOver={route.mouseOver}
          />
        ))}
        <Tab
          value={5}
          label='effff'
          sx={{
            display: value === 5 ? 'inline-flex' : 'none',
            position: 'absolute',
            top: '-50em',
          }}
        />
      </Tabs>
      <Button
        component={Link}
        to='/estimate'
        variant='contained'
        color='secondary'
        sx={theme => ({
          ...theme.typography.estimate,
          borderRadius: '50px',
          marginLeft: '50px',
          marginRight: '25px',
          height: '45px',
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
        })}
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        keepMounted
        anchorEl={anchorEl}
        open={openMenu}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleClose }}
        sx={theme => ({
          zIndex: 1302,
          '& .MuiMenu-paper': {
            backgroundColor: theme.palette.common.blue,
            color: '#FFFFFF',
          },
        })}
        onClose={handleClose}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            component={Link}
            to={option.link}
            sx={theme => ({
              ...theme.typography.tab,
              color: '#FFFFFF',
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
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: 'common.blue' } }}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <ToolbarMargin />
        <List disablePadding>
          {routes.map(route => (
            <DrawerItemButton
              divider
              key={`${route}${route.activeIndex}`}
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <DrawerItemText
                disableTypography
                sx={value === route.activeIndex ? { opacity: 1 } : { opacity: 0.7 }}
              >
                {route.name}
              </DrawerItemText>
            </DrawerItemButton>
          ))}
          <DrawerItemButton
            divider
            component={Link}
            to='/estimate'
            sx={{ backgroundColor: 'common.orange' }}
            selected={value === 5}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
          >
            <DrawerItemText
              disableTypography
              sx={value === 5 ? { opacity: 1 } : { opacity: 0.7 }}
            >
              Free Estimate
            </DrawerItemText>
          </DrawerItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        sx={{ marginLeft: 'auto', '&:hover': { backgroundColor: 'transparent' } }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ height: '50px', width: '50px' }} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationOnScroll {...props}>
        <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.modal + 1 }}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              // disableRipple
              sx={{ padding: 0, '&:hover': { backgroundColor: 'transparent' } }}
              onClick={() => setValue(0)}
            >
              <Box
                component='img'
                src={logo}
                alt='logo'
                sx={{ height: { xs: '5.5em', sm: '7em', lg: '8em' } }}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationOnScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
