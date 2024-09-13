import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7fd;
`;

export const BackButton = styled.div`
  margin-bottom: 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
  a {
    text-decoration: none;
    color: #7065f0;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    border-radius: 12px;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -20px;
`;

export const InfoCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #f7f7fd;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const CategoryPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const Price = styled.p`
  white-space: nowrap;
  font-size: 2rem;
  font-weight: bold;
  color: #7065f0;
  font-family: "Plus Jakarta Sans", sans-serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #7065f0;
  color: white;
  border: none;
  padding: 15px;
  font-family: "Plus Jakarta Sans", sans-serif;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 20px;
  flex-grow: 1;
  &:hover {
    background-color: #5849d3;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const Brand = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const Color = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: "Plus Jakarta Sans", sans-serif;
`;
