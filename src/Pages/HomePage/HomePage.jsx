import { useEffect, useState } from "react";
import { getTrending } from "../../Services/Api";
import { Title } from "./HomePage.styled";

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
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </main>
  );
};
export default HomePage;
