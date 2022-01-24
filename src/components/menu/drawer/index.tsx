import * as React from 'react';
import { Toolbar } from '@components/Menu/styles';
import List from '@mui/material/List';
import ListItem from '@components/Menu/Drawer/ListItem';
import NavLink from '@components/Menu/Drawer/NavLink';
import DrawerWrapper from '@components/Menu/Drawer/DrawerWrapper';
import DrawerFooter from '@components/Menu/Drawer/DrawerFooter';
// import AppLogo from '@components/atoms/AppLogo';
import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import MenuHaburgerButton from '@app/components/atoms/MenuHamburgerButton';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export interface DrawerItemProps {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

export interface MenuDrawerProps {
  handleDrawerClose: () => void;
  open: boolean;
  drawerList: DrawerItemProps[];
  logoutComponent?: React.ReactNode;
}

const MenuDrawer: React.FunctionComponent<MenuDrawerProps> = ({
  handleDrawerClose,
  open,
  drawerList,
  logoutComponent,
}) => {
  return (
    <DrawerWrapper drawerPropsOverride={{ open: open }}>
      <div>
        <Toolbar style={{ padding: '16px' }}>
          <LogoWrapper>
            <MenuHaburgerButton handleOnClick={handleDrawerClose} />
            <Typography variant="h6" sx={{ margin: 0 }}>
              YS System
            </Typography>
            {/* <AppLogo /> */}
          </LogoWrapper>
        </Toolbar>
        <Divider />
        <List style={{ overflow: 'scroll', paddingTop: '16px' }}>
          {drawerList.map((drawerItem, key) => (
            <NavLink to={drawerItem.to} key={`${drawerItem.label}-${key}`}>
              <ListItem label={drawerItem.label} icon={drawerItem.icon} />
            </NavLink>
          ))}
        </List>
      </div>
      <DrawerFooter>{logoutComponent}</DrawerFooter>
    </DrawerWrapper>
  );
};

export default MenuDrawer;
