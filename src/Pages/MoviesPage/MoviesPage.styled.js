import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
display:flex;
flex-direction:column;
gap:10px;
list-style:decimal;
`
export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 8px;
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
  }
`;
