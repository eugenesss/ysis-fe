import * as React from 'react';
import { Toolbar } from '@components/Menu/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@components/Menu/Drawer/ListItem';
import NavLink from '@components/Menu/Drawer/NavLink';
import DrawerWrapper from '@components/Menu/Drawer/DrawerWrapper';
import DrawerFooter from '@components/Menu/Drawer/DrawerFooter';
import AppLogo from '@components/atoms/AppLogo';

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
      <Toolbar>
        <AppLogo />
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List style={{ overflow: 'scroll' }}>
        {drawerList.map((drawerItem, key) => (
          <NavLink to={drawerItem.to} key={`${drawerItem.label}-${key}`}>
            <ListItem label={drawerItem.label} icon={drawerItem.icon} />
          </NavLink>
        ))}
      </List>
      <DrawerFooter>{logoutComponent}</DrawerFooter>
    </DrawerWrapper>
  );
};

export default MenuDrawer;
