import React from 'react';
import { Stack, Text } from 'native-base';
import MoviesContainer from '../containers/MoviesContainer';
import DropDownMenu from '../forms/DropDownMenu';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MoviesScreen =({navigation}) => {
    return (

        <>
        <MoviesContainer navigation={NavigationRouteContext}/>
        </>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //     <Text>
        //         Movies Screen
        //      </Text>
        //         <MoviesContainer navigation={{navigation}}/>

        //     </Stack.Navigator>
            
        //      <MoviesContainer />

        // </NavigationContainer>
        
    )
}


export default MoviesScreen;
