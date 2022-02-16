import React, {useState} from 'react';
import Form from '../forms/Form';
import { Container, Center } from 'native-base'; 
import { getMovies } from '../services/api';
import Loading from '../layout/Loading';
import MoviesList from '../lists/MoviesList';

const MoviesContainer = ({navigation}) => {

    const [movieFilter, setMovieFilter] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [moviesData, setMoviesData] = useState(null);

    const fetchMovies = () => {
         setIsLoading(true);

         getMovies(moviesData).then(
             movies => {
                 setMovies(movies);
                 setIsLoading(false);
                 console.log('movies: ', movies)
             },
             error => {
                 alert("Error", `Something went wrong! ${error}`)
             }
         )
    }


    getMovies(moviesData).then(
        movies => {
            setMovies(movies);
            console.log('movies: ', movies)
        },
        error => {
            alert("Error", `Something went wrong! ${error}`)
        }
    )
    // const handleInputChange = moviesData => {
    //     console.log('movies data', moviesData);
    //     setMoviesData(moviesData);
    // }

    return (
        <Container width="100%" px ={4} >
            <Center>
                
            {/* <Form  onInputChange={handleInputChange} fetchMovies={fetchMovies}/> */}
            {isLoading ?  <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
            </Center>
        </Container>
    )
}
export default MoviesContainer;