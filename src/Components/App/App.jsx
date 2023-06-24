import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../Pages/MoviesPage/MoviesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  );
};
