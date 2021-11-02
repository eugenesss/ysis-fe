import { DrawerItemProps } from '@components/menu/drawer';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const menuRoutes: DrawerItemProps[] = [
  { label: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { label: 'Collections', to: '/collections', icon: LibraryBooksIcon },
];

export default menuRoutes;
