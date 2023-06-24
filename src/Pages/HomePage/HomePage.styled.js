import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
margin-top: 30px;
margin-bottom:0;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 8px;
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
  }
`;
export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: decimal;
`;