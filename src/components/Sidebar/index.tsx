import * as React from 'react';
import Toolbar from '@components/atoms/AppToolbar';
import List from '@mui/material/List';
import ListItem from '@components/Sidebar/ListItem';
import NavLink from '@components/Sidebar/NavLink';
import DrawerWrapper from '@components/Sidebar/Drawer/DrawerWrapper';
import DrawerFooter from '@components/Sidebar/Drawer/DrawerFooter';
// import AppLogo from '@components/atoms/AppLogo';
import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import MenuHaburgerButton from '@components/atoms/MenuHamburgerButton';
import { SvgIconComponent } from '@mui/icons-material';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export interface DrawerItemProps {
  label: string;
  to: string;
  icon?: SvgIconComponent;
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
