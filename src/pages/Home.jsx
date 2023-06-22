import { useEffect, useState } from "react";
import { getTrending } from "../services/api";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then((data) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((movie) => 
          <li key={movie.id}>{movie.original_title}</li>
        )}
      </ul>
    </main>
  );
};
