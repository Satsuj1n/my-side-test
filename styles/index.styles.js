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

export const DivCarregando = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #7065f0;
  font-family: "Plus Jakarta Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  button {
    background-color: #7065f0;
    color: #fff;
    border: none;
    padding: 8px 16px;
    margin: 0 5px;
    border-radius: 9px;
    cursor: pointer;
    font-family: "Plus Jakarta Sans", sans-serif;

    &:hover {
      background-color: #5847c7;
    }

    &:focus {
      outline: none;
      background-color: #4836a3;
    }
  }
`;
