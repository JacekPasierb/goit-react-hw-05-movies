import axios from "axios";

const API_KEY = "ed8138a9b1d26ff1fe9b2cadda718afb";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovies = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const getMovieCredits = async (id) => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const getReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
