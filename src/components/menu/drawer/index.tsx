import * as React from 'react';
import { Toolbar } from '@components/menu/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@components/menu/drawer/ListItem';
import NavLink from '@components/menu/drawer/NavLink';
import DrawerWrapper from '@components/menu/drawer/DrawerWrapper';
import DrawerFooter from '@components/menu/drawer/DrawerFooter';
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
