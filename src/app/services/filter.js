export const searchProductsByName = (products, searchTerm) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const filterProductsByCategory = (products, category) => {
  if (category === "") {
    return products;
  }
  return products.filter((product) => product.category === category);
};
