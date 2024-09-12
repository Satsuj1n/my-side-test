import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #f7f7fd;
    margin: 0;
    padding: 0;
  }
`;

export const PageContainer = styled.div`
  padding: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  grid-row-gap: 60px;
`;
