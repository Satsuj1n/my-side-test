import React from "react";
import styled from "styled-components";

const ProductCard = ({ image, title, price, description, category }) => {
  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
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
        <AddToCartButton>Add to cart</AddToCartButton>
      </CardBody>
    </Card>
  );
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
`;

const ProductCategory = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDescription = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
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
