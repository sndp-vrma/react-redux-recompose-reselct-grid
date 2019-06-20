import React from "react";
import styled from "styled-components";

const SearchText = ({
  label,
  searchKey,
  type,
  search,
  onSearch,
  onSearchClear,
}) => (
    <Input
      onChange={(val, key, type) => onSearch(val, key, type)}
      placeholder={`Search ${label}`}
    />
);


const Input = styled.input`
  padding: 0.5em;
  color: "palevioletred"};
  background: Gainsboro;
  border: none;
  border-radius: 3px;
`;

export default SearchText;
