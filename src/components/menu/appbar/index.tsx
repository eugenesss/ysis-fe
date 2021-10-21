import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Toolbar } from "@components/menu/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import { config } from "../menu.config";

import styledC from "styled-components";

const AppBarContent = styledC.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface ElevateBarProps {
  children: React.ReactElement;
  open?: boolean;
}

function ElevationScroll(props: ElevateBarProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: "white",
  color: "black",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${config.drawerWidth}px)`,
    marginLeft: `${config.drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function ElevateAppBar(props: ElevateBarProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar open={props.open}>
          <Toolbar>
            <AppBarContent>{props.children}</AppBarContent>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
