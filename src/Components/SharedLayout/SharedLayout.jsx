import { Outlet } from "react-router-dom";
import { Container, Header, Link, Main } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav role="navigation">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
