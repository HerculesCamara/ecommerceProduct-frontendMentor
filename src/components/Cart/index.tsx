import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <span>Cart</span>
      <hr />
      <div>
        <p>Your cart is empty.</p>
      </div>
    </CartContainer>
  );
}
