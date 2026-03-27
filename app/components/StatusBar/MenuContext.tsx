import { createContext, useCallback, useContext, useState } from "react";

type MenuContextType = {
  activeMenu: string | null;
  toggle: (id: string) => void;
  close: () => void;
};

const MenuContext = createContext<MenuContextType>(null!);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const toggle = useCallback(
    (id: string) => setActiveMenu((prev) => (prev === id ? null : id)),
    [],
  );
  const close = useCallback(() => setActiveMenu(null), []);

  return (
    <MenuContext.Provider value={{ activeMenu, toggle, close }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
