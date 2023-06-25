import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../Pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("../../Pages/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("../../Components/Cast/Cast"));
const Reviews = lazy(() => import("../../Components/Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
