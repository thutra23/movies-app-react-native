import axios from "axios";
import { BASE_URL, APP_KEY, APP_ID, TYPE } from "../config/api_config";
import qs from 'qs';

export const getMoviesNowPlaying = async movie => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}`

    try {
        // const params = {
        //     // q: movie, 
        //     app_key: APP_KEY,
        // }

        // const movieAxios = axios.create({
        //     paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
        // })

        const response = await fetch(url);

        const movies = response.data.hits; 

        return movies;
    } catch (error) {
        throw error;
    }
}