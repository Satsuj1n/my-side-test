import React from "react";
import styled from "styled-components";
import Link from "next/link"; // Importar Link do Next.js

const ProductCard = ({ id, image, title, price, description, category }) => {
  return (
    <Card>
      {/* Envolver a parte clicável do card no Link */}
      <StyledLink href={`/products/${id}`} passHref>
        <CardClickableArea>
          <CardImageWrapper>
            <CardImage
              src={image}
              alt={title}
              isSmallImage={imageIsSmall(image)}
            />
          </CardImageWrapper>
          <CardBody>
            <ProductPrice>${price.toLocaleString()}</ProductPrice>
            <ProductTitle>
              {title.length > 45 ? `${title.substring(0, 45)}...` : title}
            </ProductTitle>
            <ProductCategory>
              <strong>Category:</strong> {category}
            </ProductCategory>
            <ProductDescription>
              {description.length > 100
                ? `${description.substring(0, 100)}...`
                : description}
            </ProductDescription>
          </CardBody>
        </CardClickableArea>
      </StyledLink>

      {/* Botão de "Add to cart" fora do link */}
      <AddToCartButton onClick={() => handleAddToCart(id)}>
        Add to cart
      </AddToCartButton>
    </Card>
  );
};

// Verificar se a imagem é menor que o padrão
const imageIsSmall = (imageSrc) => {
  const img = new Image();
  img.src = imageSrc;
  return img.width < 200 || img.height < 200; // Ajuste os valores conforme necessário
};

// Styled Components

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove a sublinha */
  color: inherit; /* Mantém a cor herdada */
  
  &:hover {
    text-decoration: none; /* Garante que não aparece ao passar o mouse */
  }

  h2, p, span {
    text-decoration: none; /* Remove qualquer sublinha nos elementos de texto */
  }
`;

const CardClickableArea = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
`;

const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 15px;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  ${(props) =>
    props.isSmallImage &&
    `
      width: 200px;
      height: 200px;
    `}
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProductPrice = styled.div`
  font-size: 1.25rem;
  color: #7065f0;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const ProductTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #080929;
  margin: 10px 0;
  line-height: 1.4em;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const ProductCategory = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const ProductDescription = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const AddToCartButton = styled.button`
  background-color: #7065f0;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: auto;
  font-family: "Plus Jakarta Sans", sans-serif;

  &:hover {
    background-color: #5847c7;
  }
`;

export default ProductCard;
