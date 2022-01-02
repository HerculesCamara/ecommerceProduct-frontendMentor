import { ProductInfoContainer } from "./styles";
import { QttSelector } from "../QttSelector";
import { AddCardButton } from "../AddCardButton";

export function ProductInfo() {
  return (
    <ProductInfoContainer>
      <span>Sneaker Company</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <span>$125.00</span>
        <span>50%</span>
        <span>$250.00</span>
      </div>

      <QttSelector />
      <AddCardButton />
    </ProductInfoContainer>
  );
}
