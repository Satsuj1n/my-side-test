import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductById } from "../../src/app/services/api";
import Link from "next/link";
import {
  PageContainer,
  BackButton,
  Title,
  ProductWrapper,
  ImageContainer,
  InfoWrapper,
  ProductInfo,
  CategoryPriceWrapper,
  Category,
  Price,
  AddToCartButton,
  Description,
  InfoCard,
  Brand,
  Color,
  InfoGroupWrapper,
} from "../../styles/products.styles.js";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const productData = await getProductById(id);
          if (productData && productData.product) {
            setProduct(productData.product);
          } else {
            console.error("Produto não encontrado!");
          }
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Carregando detalhes do produto...</p>;
  }

  return (
    <PageContainer>
      <BackButton>
        <Link href="/">🠔 Voltar para produtos</Link>
      </BackButton>
      <ProductWrapper>
        <ImageContainer>
          <img src={product.image} alt={product.title} />
        </ImageContainer>

        <InfoWrapper>
          <Title>
            {product.title.length > 45
              ? `${product.title.substring(0, 85)}`
              : product.title}
          </Title>
          <InfoCard>
            <Description>{product.description}</Description>
            <InfoGroupWrapper>
              <Category>Category: {product.category}</Category>
              <Brand>Brand: {product.brand}</Brand>
              <Color>Color: {product.color}</Color>
            </InfoGroupWrapper>
            <CategoryPriceWrapper>
              <Price>Price: ${product.price}</Price>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </CategoryPriceWrapper>
          </InfoCard>
        </InfoWrapper>
      </ProductWrapper>
    </PageContainer>
  );
}
