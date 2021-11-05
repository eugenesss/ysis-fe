import React, { FunctionComponent } from 'react';
import NavTabs, { NavTabItem } from '@components/NavTabs/NavTabContainer';
import { Switch, Route } from 'react-router-dom';

export interface SubNavItem extends NavTabItem {
  component: React.ReactNode;
}

interface SubMenuContainerProps {
  subNavItems: SubNavItem[];
}

const SubMenuContainer: FunctionComponent<SubMenuContainerProps> = ({
  subNavItems,
}) => {
  return (
    <>
      <NavTabs items={subNavItems} />
      <Switch>
        {subNavItems.map((subNav) => (
          <Route key={subNav.label} path={subNav.route} exact>
            {subNav.component}
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default SubMenuContainer;

// Private SubRoute with auth
