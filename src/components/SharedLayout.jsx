import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import React, { Suspense } from "react";

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
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      
    </Container>
  );
};
