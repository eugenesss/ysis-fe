import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

// AppBar
import AppBar from '@components/menu/appbar';
import MenuHamburgerButton from '@components/menu/appbar/MenuHamburgerButton';

import MenuDrawer from '@components/menu/drawer';
import ContentWrapper from '@components/menu/ContentWrapper';

import MenuRoutes from './menuRoutes';
import Logout from '@app/container/MenuContainer/Logout';

interface MenuContainerProps {
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
        <React.Fragment>
          <div style={{ display: 'flex' }}>
            <MenuHamburgerButton
              handleOnClick={handleDrawerOpen}
              buttonProps={{ style: { ...(open && { display: 'none' }) } }}
            />

            <div>
              <Typography variant="h6" alignSelf="center">
                {props.title}
              </Typography>
              {props.subtitle && (
                <Typography variant="caption" alignSelf="center">
                  {props.subtitle}
                </Typography>
              )}
            </div>
          </div>
          {/* iconbutton */}
        </React.Fragment>
      </AppBar>

      <MenuDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerList={MenuRoutes}
        logoutComponent={<Logout />}
      />
      <ContentWrapper isDrawerOpen={open}>{props.children}</ContentWrapper>
    </Box>
  );
};

export default MenuContainer;
