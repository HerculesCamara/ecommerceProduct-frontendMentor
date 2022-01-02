import { Carroussel } from "./components/carroussel";
import { HamburguerMenu } from "./components/HamburguerMenu";
import { Header } from "./components/Header";
import { ProductInfo } from "./components/ProductInfo";
import { HamburguerMenuProvider } from "./hooks/useHamburguerMenu";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <HamburguerMenuProvider>
      <HamburguerMenu />
      <Header />
      <Carroussel />
      <ProductInfo />
      <GlobalStyle />
    </HamburguerMenuProvider>
  );
}
