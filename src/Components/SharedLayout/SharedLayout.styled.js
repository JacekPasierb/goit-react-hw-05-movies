import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  margin-bottom: 16px;

  background-color: lightblue;

  > nav {
    display: flex;
    padding-top: 30px;
  }
`;
export const Main = styled.main`
  padding: 0 20px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 50% 50% 0 0;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 26px;

  &.active {
    background-color: lightslategrey;
  }
`;
