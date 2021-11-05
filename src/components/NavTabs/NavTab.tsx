import { FunctionComponent } from 'react';
import Tab, { TabProps } from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    minWidth: '0px',
    minHeight: '40px',
    marginRight: theme.spacing(4),
    padding: 0,
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export interface NavTabProps extends TabProps {}
const NavTab: FunctionComponent<NavTabProps> = (props) => {
  return <StyledTab {...props} />;
};

export default NavTab;