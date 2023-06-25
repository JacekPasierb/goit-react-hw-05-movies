import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getMovies } from "../../Services/Api";
import { MovieList, MovieLink } from "./MoviesPage.styled";
import SearchBox from "../../Components/SearchBox/SearchBox";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const queryContext = query.get("query") ?? "";
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ query: e.currentTarget.elements.searchInput.value });
  };
  useEffect(() => {
    if (!query.get("query")) {
      
      setMovieList([]);
    } else {
      
      getMovies(queryContext).then((data) => {
        setMovieList(data.results);
      });
    }
  }, [query, setQuery]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </li>
        ))}
      </MovieList>
    </>
  );
};
export default MoviesPage;
