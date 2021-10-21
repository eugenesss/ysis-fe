import { DrawerItem } from "@components/menu/drawer";
import HomeIcon from "@mui/icons-material/Home";

const menuRoutes: DrawerItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: <HomeIcon /> },
  { label: "test", to: "/" },
  { label: "test2", to: "/login" },
];

export default menuRoutes;
