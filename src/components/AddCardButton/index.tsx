import { AddCardButtonContainer } from "./styles";

import cartImg from "../../assets/icon-cart-white.svg";

export function AddCardButton() {
  return (
    <AddCardButtonContainer>
      <img src={cartImg} alt="cart" />
      <span>Add to card</span>
    </AddCardButtonContainer>
  );
}
