import { ProductItem } from "../ProductItem";
import { ProductsListContainer } from "./styles";

export function ProductsList() {
  return (
    <ProductsListContainer>
      {/* Aqui será feito o map dos produtos */}
      <ProductItem />
    </ProductsListContainer>
  )
}