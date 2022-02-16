import axios from "axios";
import { BASE_URL, APP_KEY, APP_ID, TYPE } from "../config/api_config";


export const getMovies = movie => {
    return axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}&language=en-US&page=1`
    )
    .then ((response) =>{
        let movies = response.data.results; 
        return movies;
    })
    .catch((error)=>{
        console.log(error.message);
    })
}