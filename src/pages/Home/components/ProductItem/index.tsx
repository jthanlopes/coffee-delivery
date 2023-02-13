import { ProductItemContainer } from "./styles";

interface ProductItemProps {
  id: number,
  name: string;
  description: string;
  price: number,
  categories: []
}

export function ProductItem({id, name, description, price, categories}: ProductItemProps) {
  return (
    <ProductItemContainer>
      {name}
      {description}
      {price/100}
      {categories}
    </ProductItemContainer>
  )
}