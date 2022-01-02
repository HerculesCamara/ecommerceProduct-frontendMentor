import { QttSelectorContainer } from "./styles";

import plusImg from "../../assets/icon-plus.svg";
import minusImg from "../../assets/icon-minus.svg";

export function QttSelector() {
  return (
    <QttSelectorContainer>
      <button>
        <img src={minusImg} alt="" />
      </button>
      <input type="text" value="0" />
      <button>
        <img src={plusImg} alt="" />
      </button>
    </QttSelectorContainer>
  );
}
