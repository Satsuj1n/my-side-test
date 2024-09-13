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
  const [activeCategory, setActiveCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
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

  const filterAndSearch = (searchTerm, category) => {
    let filtered = products;

    if (category && category !== "All Categories") {
      filtered = filterProductsByCategory(products, category);
    }

    if (searchTerm) {
      filtered = searchProductsByName(filtered, searchTerm);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); 
    filterAndSearch(searchTerm, activeCategory);
  };

  const handleFilter = (category) => {
    setActiveCategory(category);
    filterAndSearch(searchTerm, category); 
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <DivCarregando>Carregando Produtos...</DivCarregando>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
