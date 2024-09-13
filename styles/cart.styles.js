import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9ff;
  min-height: 100vh;
`;

export const BackButton = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #7065f0;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const CartImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

export const CartDetails = styled.div`
  display: flex;
  font-weight: 600;
  color: #6b7280;
  flex-direction: column;
  justify-content: center;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const CartTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #080929;
  margin-bottom: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const TotalPrice = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #7065f0;
  text-align: right;
  margin-top: 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const QuantityCounter = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #878b94;
  margin-top: 10px;
`;
