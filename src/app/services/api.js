const API_URL = "https://fakestoreapi.in/api";

// Função para obter todos os produtos
const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter os produtos:", error);
    return [];
  }
};

// Função para obter um único produto por ID
const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao obter o produto com ID ${id}:`, error);
    return null;
  }
};

// Função para obter produtos por categoria
const getProductByCategory = async (category) => {
  try {
    const response = await fetch(
      `${API_URL}/products/category?type=${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao obter os produtos da categoria ${category}:`, error);
    return [];
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
};
