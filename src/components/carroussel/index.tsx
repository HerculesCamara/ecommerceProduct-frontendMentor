import { CarrousselContainer } from "./styles";

import productImg from "../../assets/image-product-1.jpg";
import previousImg from "../../assets/icon-previous.svg";
import nextImg from "../../assets/icon-next.svg";

export function Carroussel() {
  return (
    <CarrousselContainer>
      <div className="buttons">
        <button>
          <img src={previousImg} alt="" />
        </button>
        <button>
          <img src={nextImg} alt="" />
        </button>
      </div>
      <img src={productImg} alt="" />
    </CarrousselContainer>
  );
}
