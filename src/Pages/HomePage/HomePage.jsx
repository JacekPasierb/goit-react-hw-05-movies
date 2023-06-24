import { useEffect, useState } from "react";
import { getTrending } from "../../Services/Api";
import { Title, MovieLink, MovieList } from "./HomePage.styled";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then((data) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <Title>Trending Movies</Title>
      <MovieList>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </li>
        ))}
      </MovieList>
    </main>
  );
};
export default HomePage;
