import { useEffect, useState } from "react";
import { getAllProducts } from "../src/app/services/api";
import {
  searchProductsByName,
  filterProductsByCategory,
} from "../src/app/services/filter";
import ProductCard from "../src/app/components/ProductCard";
import SearchFilterBar from "../src/app/components/SearchFilterBar";
import {
  PageContainer,
  GlobalStyles,
  Grid,
  Pagination,
} from "./styles/index.styles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Estado para gerenciar a página atual
  const productsPerPage = 24; // Limite de 24 produtos por página

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

  // Cálculo da página atual dos produtos
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleSearch = (searchTerm) => {
    const filtered = searchProductsByName(products, searchTerm);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilter = (category) => {
    const filtered = filterProductsByCategory(products, category);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <SearchFilterBar
          categories={categories}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />
        <Grid>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
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
        <Pagination>
          {Array.from(
            { length: Math.ceil(filteredProducts.length / productsPerPage) },
            (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </Pagination>
      </PageContainer>
    </>
  );
}
