import * as React from "react";
import { Toolbar } from "@components/menu/styles";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@components/menu/drawer/ListItem";
import NavLink from "@components/menu/drawer/NavLink";
import DrawerWrapper from "@components/menu/drawer/DrawerWrapper";
import DrawerFooter from "@components/menu/drawer/DrawerFooter";

import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

import styled from "styled-components";

const AppLogo = styled.div`
  height: 50px;
  width: 50px;
  background-image: url("./assets/logo.png");
  background-size: cover;
  background-position: center;
`;

export interface DrawerItem {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

interface MenuDrawerProps {
  handleDrawerClose: () => void;
  open: boolean;
  drawerList: DrawerItem[];
  logoutAction?: () => void;
}

const MenuDrawer: React.FunctionComponent<MenuDrawerProps> = ({
  handleDrawerClose,
  open,
  drawerList,
  logoutAction,
}) => {
  return (
    <DrawerWrapper drawerPropsOverride={{ open: open }}>
      <Toolbar>
        <AppLogo />
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List style={{ overflow: "scroll" }}>
        {drawerList.map((drawerItem) => (
          <NavLink to={drawerItem.to} key={drawerItem.label}>
            <ListItem label={drawerItem.label} icon={drawerItem.icon} />
          </NavLink>
        ))}
      </List>
      <DrawerFooter>
        <Button
          onClick={logoutAction}
          style={{ color: "#545454", width: "120px" }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </DrawerFooter>
    </DrawerWrapper>
  );
};

export default MenuDrawer;
