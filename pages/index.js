import { useEffect, useState } from "react";
import { getAllProducts } from "../src/app/services/api";
import {
  searchProductsByName,
  filterProductsByCategory,
} from "../src/app/services/filter";
import ProductCard from "../src/app/components/ProductCard";
import SearchFilterBar from "../src/app/components/SearchFilterBar";
import { PageContainer, PageTitle, Grid } from "./styles/index.styles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse.products);
      setFilteredProducts(productsResponse.products);

      const uniqueCategories = [
        ...new Set(productsResponse.products.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = searchProductsByName(products, searchTerm);
    setFilteredProducts(filtered);
  };

  const handleFilter = (category) => {
    const filtered = filterProductsByCategory(products, category);
    setFilteredProducts(filtered);
  };

  return (
    <PageContainer>
      <SearchFilterBar
        categories={categories}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      <Grid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
      </Grid>
    </PageContainer>
  );
}
