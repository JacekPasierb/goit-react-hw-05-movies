import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTrending } from "../../Services/Api";
import { Title, MovieLink, MovieList } from "./HomePage.styled";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
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
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </li>
        ))}
      </MovieList>
    </main>
  );
};
export default HomePage;
