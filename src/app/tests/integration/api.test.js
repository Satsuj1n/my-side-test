const {
  getAllProducts,
  getProductById,
  getProductByCategory,
} = require("@services/api");

global.fetch = jest.fn();

describe("Requisições API", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("deve buscar todos os produtos e retornar status SUCCESS", async () => {
    const mockApiResponse = {
      status: "SUCCESS",
      message: "Aqui estão os produtos...",
      products: [
        {
          id: 1,
          title: "Sony WH-1000XM3...",
          image: "https://storage...",
          price: 773,
          description: "Industry leading Active Noise...",
          brand: "sony",
          model: "WH-1000XM3",
          color: "silver",
          category: "audio",
          discount: 11,
        },
        {
          id: 2,
          title: "Microsoft Xbox...",
          image: "https://storage...",
          price: 57,
          description: "Experience the modernized design of the Xbox...",
          brand: "microsoft",
          model: "Xbox X/S",
          color: "white",
          category: "gaming",
          popular: true,
          discount: 4,
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const response = await getAllProducts();
    console.log("Retorno da API para todos os produtos: ", response);

    expect(response).toHaveProperty("status", "SUCCESS");
    expect(response).toHaveProperty("message");
    expect(response).toHaveProperty("products");
    expect(Array.isArray(response.products)).toBe(true);
    expect(response.products.length).toBeGreaterThan(0);
  });

  it("deve buscar um produto pelo ID e retornar status SUCCESS", async () => {
    const mockProductResponse = {
      status: "SUCCESS",
      message: "Aqui está o produto solicitado com ID 2",
      product: {
        id: 2,
        title: "Microsoft Xbox X/S Wireless...",
        image: "https://storage...",
        price: 57,
        description: "Experience the modernized design of the Xbox...",
        brand: "microsoft",
        model: "Xbox X/S",
        color: "white",
        category: "gaming",
        popular: true,
        discount: 4,
      },
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockProductResponse),
    });

    const response = await getProductById(2);
    console.log("Retorno da API para produto com ID 2: ", response);

    expect(response).toHaveProperty("status", "SUCCESS");
    expect(response).toHaveProperty("message");
    expect(response).toHaveProperty("product");
    expect(typeof response.product).toBe("object");
    expect(response.product.id).toBe(2);
  });

  it("deve buscar produtos por categoria e retornar status SUCCESS", async () => {
    const mockCategoryResponse = {
      status: "SUCCESS",
      message: "Aqui estão os produtos da categoria mobile.",
      products: [
        {
          id: 8,
          title: "Samsung Galaxy S21 FE 5G...",
          image: "https://storage...",
          price: 434,
          description: "Pro-grade Camera with AI Single Take...",
          brand: "samsung",
          model: "Samsung Galaxy S21 FE 5G ...",
          color: "Lavender",
          category: "mobile",
          discount: 9,
          onSale: true,
        },
        {
          id: 10,
          title: "Samsung Galaxy S22 5G...",
          image: "https://storage...",
          price: 760,
          description: "Pro-grade Camera that lets...",
          brand: "samsung",
          model: "Samsung Galaxy S22 5G...",
          color: "White",
          category: "mobile",
          discount: 29,
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockCategoryResponse),
    });

    const response = await getProductByCategory("mobile");
    console.log(
      "Retorno da API para produtos da categoria 'mobile': ",
      response
    );

    expect(response).toHaveProperty("status", "SUCCESS");
    expect(response).toHaveProperty("message");
    expect(response).toHaveProperty("products");
    expect(Array.isArray(response.products)).toBe(true);
    expect(response.products.length).toBeGreaterThan(0);
  });
});
