import React, { FunctionComponent } from 'react';
import NavTab from './NavTab';
import NavTabs from './NavTabs';
import { useHistory, useLocation, RouteProps } from 'react-router-dom';

export enum DataTestId {
  NavTab = 'nav-tab',
  NavTabs = 'nav-tabs',
}

export interface NavTabItem {
  label: string;
  route: RouteProps['path'];
}

export interface SubNavProps {
  items: NavTabItem[];
}

function getRouteIdx(curPathname: string, navTabContainer: NavTabItem[]) {
  const indx = navTabContainer.findIndex((tab) => tab.route === curPathname);
  if (indx === -1) return 0;
  return indx;
}

const SubNav: FunctionComponent<SubNavProps> = ({ items }) => {
  const history = useHistory();
  const location = useLocation();

  const [value, setValue] = React.useState<number>(
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
    <NavTabs
      value={value}
      handleChange={handleChange}
      data-testid={DataTestId.NavTabs}
    >
      {items.map((navTab) => (
        <NavTab
          key={navTab.label}
          label={navTab.label}
          onClick={() => handleOnClick(navTab.route)}
          data-testid={DataTestId.NavTab}
        />
      ))}
    </NavTabs>
  );
};

export default SubNav;
