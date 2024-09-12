import {
  searchProductsByName,
  filterProductsByCategory,
} from "@services/filter";

const mockProducts = [
  { id: 1, title: "Apple iPhone 13", category: "mobile" },
  { id: 2, title: "Samsung Galaxy S21", category: "mobile" },
  { id: 3, title: "Sony WH-1000XM4", category: "audio" },
  { id: 4, title: "Microsoft Xbox Series X", category: "gaming" },
];

describe("searchProductsByName", () => {
  test("deve retornar produtos que contenham o termo de busca no título", () => {
    const result = searchProductsByName(mockProducts, "iphone");
    console.log("Resultado da pesquisa por 'iphone': ", result);
    expect(result).toEqual([
      { id: 1, title: "Apple iPhone 13", category: "mobile" },
    ]);
  });

  test("deve retornar todos os produtos quando o termo de busca for vazio", () => {
    const result = searchProductsByName(mockProducts, "");
    console.log("Resultado da pesquisa com termo vazio: ", result);
    expect(result).toEqual(mockProducts);
  });

  test("deve ser case insensitive", () => {
    const result = searchProductsByName(mockProducts, "SONY");
    console.log(
      "Resultado da pesquisa por 'SONY' (case insensitive): ",
      result
    );
    expect(result).toEqual([
      { id: 3, title: "Sony WH-1000XM4", category: "audio" },
    ]);
  });
});

describe("filterProductsByCategory", () => {
  test("deve retornar produtos que correspondem à categoria", () => {
    const result = filterProductsByCategory(mockProducts, "mobile");
    console.log("Resultado do filtro pela categoria 'mobile': ", result);
    expect(result).toEqual([
      { id: 1, title: "Apple iPhone 13", category: "mobile" },
      { id: 2, title: "Samsung Galaxy S21", category: "mobile" },
    ]);
  });

  test("deve retornar todos os produtos quando a categoria for vazia", () => {
    const result = filterProductsByCategory(mockProducts, "");
    console.log("Resultado do filtro com categoria vazia: ", result);
    expect(result).toEqual(mockProducts);
  });

  test("deve retornar uma lista vazia quando a categoria não corresponder a nenhum produto", () => {
    const result = filterProductsByCategory(mockProducts, "laptop");
    console.log(
      "Resultado do filtro por uma categoria inexistente 'laptop': ",
      result
    );
    expect(result).toEqual([]);
  });
});
