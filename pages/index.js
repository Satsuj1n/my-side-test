import { useEffect, useState } from "react";
import { getAllProducts } from "../src/app/services/api";
import ProductCard from "../src/app/components/ProductCard";
import {
  GlobalStyles,
  ProductGrid,
  PageContainer,
  PageTitle,
} from "./styles/index.styles";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse.products);
    };

    fetchProducts();
  }, []);

  return (
    <PageContainer>
      <GlobalStyles />
      <PageTitle>Lista de Produtos</PageTitle>
      <ProductGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </ProductGrid>
    </PageContainer>
  );
}
