import axios from "axios";

const API_KEY = "ed8138a9b1d26ff1fe9b2cadda718afb";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrending = async() => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
}


