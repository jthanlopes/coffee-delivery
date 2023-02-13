import { useEffect, useState } from "react";
import { api } from "../../../../services/axios";
import { ProductItem } from "../ProductItem";
import { ProductsListContainer } from "./styles";

interface Product {
  id: number,
  name: string;
  description: string;
  price: number,
  categories: []
}

export function ProductsList() {
  const [products, setProdutcts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products')
      .then(response => setProdutcts(response.data))
      .catch(error => console.error(error))
  }, []);

  return (
    <ProductsListContainer>
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          categories={product.categories}
        />
      )
      )}
    </ProductsListContainer>
  )
}