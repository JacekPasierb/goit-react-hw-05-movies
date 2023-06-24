import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../../Services/Api";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const queryContext = query.get("query") ?? "";
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ query: e.currentTarget.elements.searchInput.value });
  };
  useEffect(() => {
    if (!query.get("query")) {
      console.log("pusty input");
      setMovieList([]);
    } else {
      console.log("coc", queryContext);
      getMovies(queryContext).then((data) => {
        setMovieList(data.results);
      });
    }
  }, [query, setQuery]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </main>
  );
};
export default MoviesPage;
