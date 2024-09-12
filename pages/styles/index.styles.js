import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;

export const PageContainer = styled.div`
  padding: 40px;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #080929;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  grid-row-gap: 60px;
`;
