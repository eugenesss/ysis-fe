import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

// AppBar
import AppBar, { AppbarLeft, AppbarRight } from '@components/Menu/Appbar';
import MenuHamburgerButton from '@components/atoms/MenuHamburgerButton';

import MenuDrawer from '@components/Menu/Drawer';
import ContentWrapper from '@components/Menu/ContentWrapper';

import { menuRoutes, appbarRoutes } from './menuRoutes';
import Logout from '@app/container/MenuContainer/Logout';
import IconButton from '@components/atoms/IconButton';
import { Link } from 'react-router-dom';

export interface AppbarButton {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const MenuContainerHeading = ({ title, subtitle }) => {
  return (
    <div>
      <Typography variant="h6" alignSelf="center">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="caption" alignSelf="center">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export interface MenuContainerProps {
  title: string;
  subtitle?: string;
}

const MenuContainer: React.FunctionComponent<MenuContainerProps> = (props) => {
  const [open, setOpen] = React.useState(
    window.innerWidth < 600 ? false : true,
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open}>
        <AppbarLeft>
          <MenuHamburgerButton
            handleOnClick={handleDrawerOpen}
            buttonProps={{
              style: { ...(open && { display: 'none' }), marginRight: '16px' },
            }}
          />
          <MenuContainerHeading title={props.title} subtitle={props.subtitle} />
        </AppbarLeft>
        <AppbarRight>
          {appbarRoutes.map((button, key) => (
            <Link key={key} to={button.to}>
              <IconButton label={button.label} icon={button.icon} />
            </Link>
          ))}
        </AppbarRight>
      </AppBar>

      <MenuDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerList={menuRoutes}
        logoutComponent={<Logout />}
      />
      <ContentWrapper isDrawerOpen={open}>{props.children}</ContentWrapper>
    </Box>
  );
};

export default MenuContainer;
