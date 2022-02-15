import * as React from 'react';
import { styled } from '@mui/system';

const DrawerFooterWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

interface DrawerFooterProps {}

const DrawerFooter: React.FunctionComponent<DrawerFooterProps> = (props) => {
  return <DrawerFooterWrapper>{props.children}</DrawerFooterWrapper>;
};

export default DrawerFooter;
