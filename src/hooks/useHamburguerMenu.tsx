import { createContext, ReactNode, useContext, useState } from "react";

interface HamburguerMenuContextData {
  isOpen: boolean;
  handleCloseHamburguerMenu: () => void;
  handleOpenHamburguerMenu: () => void;
}

const HamburguerMenuContext = createContext({} as HamburguerMenuContextData);

interface HamburguerMenuProps {
  children: ReactNode;
}

export function HamburguerMenuProvider({ children }: HamburguerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenHamburguerMenu() {
    setIsOpen(true);
  }

  function handleCloseHamburguerMenu() {
    setIsOpen(false);
  }

  return (
    <HamburguerMenuContext.Provider
      value={{ handleCloseHamburguerMenu, handleOpenHamburguerMenu, isOpen }}
    >
      {children}
    </HamburguerMenuContext.Provider>
  );
}

export function useHamburguerMenu() {
  return useContext(HamburguerMenuContext);
}
