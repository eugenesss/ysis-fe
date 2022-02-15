import { FunctionComponent } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

const StyledTabs = styled((props: TabsProps) => (
  <Tabs
    {...props}
    scrollButtons={false}
    variant="scrollable"
    allowScrollButtonsMobile
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  minHeight: '0px',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

export interface NavTabsProps {
  value: TabsProps['value'];
  handleChange: TabsProps['onChange'];
}

const NavTabs: FunctionComponent<NavTabsProps> = ({
  value,
  handleChange,
  children,
}) => {
  return (
    <StyledTabs value={value} onChange={handleChange}>
      {children}
    </StyledTabs>
  );
};

export default NavTabs;
