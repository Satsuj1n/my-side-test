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
  DivCarregando,
} from "../styles/index.styles.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 24;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productsResponse = await getAllProducts();
      const fetchedProducts = productsResponse.products;

      if (fetchedProducts && fetchedProducts.length > 0) {
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        const uniqueCategories = [
          ...new Set(fetchedProducts.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Cálculo para obter a página atual de produtos
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = searchProductsByName(products, searchTerm);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const handleFilter = (category) => {
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      const filtered = filterProductsByCategory(products, category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <DivCarregando>Carregando Produtos...</DivCarregando>;
  }

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
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))}
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
