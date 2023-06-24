import { Outlet } from "react-router-dom";
import { Container, Header, Link, Main } from "./SharedLayout.styled";
import { Suspense } from "react";

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
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
