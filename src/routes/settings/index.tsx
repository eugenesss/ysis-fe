import { FunctionComponent } from 'react';
import MenuContainer from '@app/container/MenuContainer';
import SubMenuContainer, {
  SubNavItem,
} from '@app/container/SubMenuContainer/SubMenuContainer';
import UserManagement from './user-management';
import Config from './config';

const SettingSubNavs: SubNavItem[] = [
  { label: 'Settings', route: '/settings', component: <div>setting</div> },
  {
    label: 'User Management',
    route: '/settings/user-management',
    component: <UserManagement />,
  },
  { label: 'Config', route: '/settings/config', component: <Config /> },
];

interface SettingsPageProps {}
const SettingsPage: FunctionComponent<SettingsPageProps> = () => {
  return (
    <MenuContainer title="Settings">
      <SubMenuContainer subNavItems={SettingSubNavs} />
    </MenuContainer>
  );
};

export default SettingsPage;
