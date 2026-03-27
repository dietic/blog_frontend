import { useMenu } from "../MenuContext";
import MenuItems from "./MenuItems";

export interface MenuItem {
  id: string;
  label: string;
  //   action?: string;
}

export interface Menu {
  id: string;
  label: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface MenuProps {
  menu: Menu;
}

export default function Menu(props: MenuProps) {
  const { menu } = props;
  const { activeMenu, toggle } = useMenu();
  return (
    <button className="relative cursor-pointer" onClick={() => toggle(menu.id)}>
      {menu.icon ? menu.icon : menu.label}
      {activeMenu === menu.id && <MenuItems items={menu.items}></MenuItems>}
    </button>
  );
}
