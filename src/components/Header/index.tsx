import { HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import iconCart from "../../assets/icon-cart.svg";
import avatarImg from "../../assets/image-avatar.png";
import { useHamburguerMenu } from "../../hooks/useHamburguerMenu";
import { Cart } from "../Cart";

export function Header() {
  const { handleOpenHamburguerMenu } = useHamburguerMenu();
  return (
    <HeaderContainer>
      <div className="items">
        <button onClick={handleOpenHamburguerMenu}>
          <img src={iconMenu} alt="menu" />
        </button>
        <img src={logoImg} alt="sneakers" />
      </div>

      <div className="items">
        <button>
          <img src={iconCart} alt="" />
        </button>
        <div className="perfilPhoto">
          <img src={avatarImg} alt="" />
        </div>
      </div>
      <Cart />
    </HeaderContainer>
  );
}
