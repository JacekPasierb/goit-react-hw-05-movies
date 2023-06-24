import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { MovieBox, MovieInfo, Title, GenresList, InfoBox, Img } from "./MovieDetails.styled";
import { getMovieDetails } from "../../Services/Api";


const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then((data) => {
      setMovieDetail(data);
      
    });
  }, [movieId]);
  const { original_title, overview, genres, poster_path, vote_average } =
        movieDetail;
     const score = vote_average * 10;
    
  return (
    <>
      <MovieBox>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `/src/Images/path404.jpg`
          }
          width="200"
          height="300"
          loading="lazy"
          alt="poster"
        />
        <MovieInfo>
          <Title>{original_title}</Title>
          <p>User score: {score.toFixed(2)}%</p>
          <h5>Overview</h5>
          <p>{overview}</p>
          <h5>Genres</h5>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieBox>
      <InfoBox>
        <Title>Additional Information</Title>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="Reviews">Reviews</Link>
          </li>
        </ul>
          </InfoBox>
          <Outlet/>
    </>
  );
};
export default MovieDetails;
