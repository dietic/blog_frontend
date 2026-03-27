"use client";

import LanguageIcon from "@/app/icons/LanguageIcon";
import DateTime from "./DateTime/DateTime";
import Menu from "./Menu/Menu";
import type { Menu as MenuType } from "./Menu/Menu";
import { MenuProvider } from "./MenuContext";

export default function StatusBar() {
  const toggleMenu: MenuType = {
    id: "status-bar-lang",
    label: "lang",
    icon: <LanguageIcon />,
    items: [
      {
        id: "test1",
        label: "test1",
      },
      {
        id: "test2",
        label: "test2",
      },
    ],
  };
  return (
    <MenuProvider>
      <div className="bg-background flex justify-between items-center text-sm py-2 px-4 font-medium">
        <div>Menus</div>
        <div className="flex gap-4">
          <Menu menu={toggleMenu} />
          <DateTime />
        </div>
      </div>
    </MenuProvider>
  );
}
