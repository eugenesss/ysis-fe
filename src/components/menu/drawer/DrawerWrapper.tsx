import * as React from 'react';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { config } from '@components/menu/menu.config';

interface DrawerWrapperProps {
  drawerPropsOverride?: Partial<DrawerProps>;
  children: React.ReactNode;
}

const DrawerWrapper: React.FunctionComponent<DrawerWrapperProps> = ({
  children,
  drawerPropsOverride,
}) => {
  const { drawerWidth, sideDrawerBackground } = config;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          display: 'flex',
          justifyContent: 'space-between',
          width: drawerWidth,
          boxSizing: 'border-box',
          background: sideDrawerBackground,
          color: '#505050',
          border: 'none',
          '@media (max-width:600px)': {
            width: '100vw',
          },
        },
      }}
      variant="persistent"
      anchor="left"
      {...drawerPropsOverride}
    >
      {children}
    </Drawer>
  );
};

export default DrawerWrapper;
