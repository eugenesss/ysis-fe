import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps } from './';
import { config } from '@components/Menu/menu.config';
import styledC from 'styled-components';

export const AppBarContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const CustomAppbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  background: 'white',
  color: 'black',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${config.drawerWidth}px)`,
    marginLeft: `${config.drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppbarLeft = styled('div')({
  display: 'flex',
});

export const AppbarRight = styledC.div`
  display: flex;
  > *:not(:last-of-type) {
    margin-right: 8px;
  }
`;
