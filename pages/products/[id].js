import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import {
  getProductByCategory,
  getProductById,
} from "../../src/app/services/api";
import Link from "next/link";
import ProductCard from "../../src/app/components/ProductCard";
import {
  RelatedTitle,
  PageContainer,
  RelatedProductGrid,
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
  Wallpaper,
} from "../../styles/products.styles.js";
import { DivCarregando } from "../../styles/index.styles.js";
import { CartContext } from "../../src/app/services/cartContext"; 
export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const { addToCart } = useContext(CartContext); // Usa o contexto do carrinho

  useEffect(() => {
    if (id) {
      // Fetch do produto atual
      getProductById(id).then((response) => setProduct(response.product));

      // Fetch dos produtos relacionados pela categoria
      if (product?.category) {
        getProductByCategory(product.category).then((res) => {
          setRelatedProducts(
            (res.products || []).filter(
              (relatedProduct) => relatedProduct.id !== parseInt(id)
            )
          );
        });
      }
    }
  }, [id, product?.category]);

  if (!product) {
    return <DivCarregando>Carregando...</DivCarregando>;
  }

  return (
    <Wallpaper>
      <PageContainer>
        <BackButton>
          <Link href="/">🠔 Back to products</Link>
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
                <AddToCartButton onClick={() => addToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </CategoryPriceWrapper>
            </InfoCard>
          </InfoWrapper>
        </ProductWrapper>
        <RelatedTitle>Related Products</RelatedTitle>
        <RelatedProductGrid>
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} {...relatedProduct} />
          ))}
        </RelatedProductGrid>
      </PageContainer>
    </Wallpaper>
  );
}
