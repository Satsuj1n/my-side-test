import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchFilterBar = ({ categories, onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(debouncedSearchTerm);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setDebouncedSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <Nav>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchWrapper>

      <CategoryWrapper>
        <CategoryDropdown
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All Categories">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategoryDropdown>
      </CategoryWrapper>

      <SearchButton onClick={() => onSearch(searchTerm)}>Search</SearchButton>
    </Nav>
  );
};

// Styled Components

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-left: 10px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #7065f0;
  }

  @media (max-width: 768px) {
    width: 93%;
  }
`;

const CategoryWrapper = styled.div`
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
  }
`;

const CategoryDropdown = styled.select`
  width: 100%;
  padding: 9px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #7065f0;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #7065f0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5b4dcf;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
  }
`;

export default SearchFilterBar;

