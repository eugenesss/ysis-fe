import React, { FunctionComponent } from 'react';
import NavTabs, { NavTabItem } from '@components/NavTabs/NavTabContainer';
import { Switch, Route } from 'react-router-dom';
import SpaceDivider from '@app/components/atoms/SpaceDivider';

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
      <SpaceDivider spacing={5} />
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
