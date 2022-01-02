import { HamburguerMenuContainer } from "./styles";

import closeImg from "../../assets/icon-close.svg";
import { useHamburguerMenu } from "../../hooks/useHamburguerMenu";

export function HamburguerMenu() {
  const { handleCloseHamburguerMenu, isOpen } = useHamburguerMenu();
  if (isOpen) {
    return (
      <HamburguerMenuContainer>
        <div>
          <button onClick={handleCloseHamburguerMenu}>
            <img src={closeImg} alt="close" />
          </button>
          <button>Collections</button>
          <button>Men</button>
          <button>Women</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div onClick={handleCloseHamburguerMenu}></div>
      </HamburguerMenuContainer>
    );
  } else {
    return <></>;
  }
}
