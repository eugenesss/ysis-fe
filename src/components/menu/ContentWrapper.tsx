import * as React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar } from "@components/menu/styles";
import { config } from "@components/menu/menu.config";

const { drawerWidth } = config;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})<{
  isDrawerOpen?: boolean;
}>(({ theme, isDrawerOpen }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(isDrawerOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const ContentContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  paddingTop: theme.spacing(2),
}));

interface ContentWrapperProps {
  children: React.ReactNode;
  isDrawerOpen: boolean;
}

const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = ({
  children,
  isDrawerOpen,
}) => {
  return (
    <Main isDrawerOpen={isDrawerOpen}>
      <Toolbar />
      <ContentContainer>{children}</ContentContainer>
    </Main>
  );
};

export default ContentWrapper;
