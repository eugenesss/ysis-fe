import React, { FunctionComponent } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Toolbar } from '@components/Menu/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ElevationScroll from '@components/Menu/Appbar/ElevationScroll';
import { CustomAppbar, AppBarContent } from './styles';

export enum DataTestId {
  AppBar = 'appbar',
  AppBarContent = 'appbar-content',
}
export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar: FunctionComponent<AppBarProps> = ({
  open,
  children,
  ...rest
}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <CustomAppbar
          data-testid={DataTestId.AppBar}
          position="fixed"
          open={open}
          {...rest}
        >
          <Toolbar>
            <AppBarContent data-testid={DataTestId.AppBarContent}>
              {children}
            </AppBarContent>
          </Toolbar>
        </CustomAppbar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default AppBar;
