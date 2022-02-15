import React, { FunctionComponent } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import NavTab from './NavTab';
import { useHistory, useLocation, RouteProps } from 'react-router-dom';
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

export interface NavTabItem {
  label: string;
  route: RouteProps['path'];
}

interface NavTabContainerProps {
  items: NavTabItem[];
}

function getRouteIdx(curPathname: string, navTabContainer: NavTabItem[]) {
  const indx = navTabContainer.findIndex((tab) => tab.route === curPathname);
  if (indx === -1) return 0;
  return indx;
}

const NavTabContainer: FunctionComponent<NavTabContainerProps> = ({
  items,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [value, setValue] = React.useState(
    getRouteIdx(location.pathname, items),
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOnClick = React.useCallback(
    (route: string) => {
      history.push(route);
    },
    [history],
  );

  return (
    <StyledTabs value={value} onChange={handleChange}>
      {items.map((navTab) => (
        <NavTab
          key={navTab.label}
          label={navTab.label}
          onClick={() => handleOnClick(navTab.route)}
        />
      ))}
    </StyledTabs>
  );
};

export default NavTabContainer;
