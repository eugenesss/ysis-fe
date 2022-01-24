import { FunctionComponent } from 'react';
import MenuContainer from '@app/container/MenuContainer';
import SubMenuContainer, {
  SubNavItem,
} from '@app/container/SubMenuContainer/SubMenuContainer';
import UserManagement from './user-management';
import AccessConfig from './access-configration';

const SettingSubNavs: SubNavItem[] = [
  { label: 'Settings', route: '/settings', component: <div>setting</div> },
  {
    label: 'User Management',
    route: '/settings/user-management',
    component: <UserManagement />,
  },
  {
    label: 'Access Configuration',
    route: '/settings/access-configration',
    component: <AccessConfig />,
  },
];

interface SettingsPageProps {}
const SettingsPage: FunctionComponent<SettingsPageProps> = () => {
  return (
    <MenuContainer title="Settings" subtitle="Tinker and tweak">
      <SubMenuContainer subNavItems={SettingSubNavs} />
    </MenuContainer>
  );
};

export default SettingsPage;
