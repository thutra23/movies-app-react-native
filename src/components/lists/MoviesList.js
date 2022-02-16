import { FlatList } from 'native-base';
import React from 'react';
import MovieCard from '../listItems/MovieCard';

const MoviesList = props => {
    const {navigation, movies, type} = props;

    return ( 
        <FlatList data={movies} renderItem={({ item }) => (
            <MovieCard 
            image={item.poster_path} 
            title={item.title} 
            popularity={item.popularity} 
            date={item.release_date}
             navigation={navigation} 
             type={type}/>
        )} 
        keyExtractor={(item)=>item.id}
        />
       
     );
}
 
export default MoviesList;