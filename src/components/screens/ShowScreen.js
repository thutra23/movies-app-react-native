import React from "react";
import MovieContainer from "../containers/MovieContainer";

const ShowScreen = ({navigation, route}) => (
    <MovieContainer navigation={navigation} route={route} />
)

export default ShowScreen;