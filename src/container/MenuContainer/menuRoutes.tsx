import { DrawerItemProps } from '@components/Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppbarButton } from '.';

export const menuRoutes: DrawerItemProps[] = [
  { label: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { label: 'Collections', to: '/collections', icon: LibraryBooksIcon },
];

export const appbarRoutes: AppbarButton[] = [
  {
    label: 'Settings',
    to: '/settings',
    icon: SettingsIcon,
  },
];
