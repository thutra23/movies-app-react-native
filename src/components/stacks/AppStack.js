import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShowScreen from "../screens/ShowScreen";
import SearchScreen from "../screens/SearchScreen"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from "../screens/MoviesScreen";
import TVShowsScreen from "../screens/TVShows";


const Tab = createMaterialTopTabNavigator();

const AppStack = () => (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Movies">
            <Tab.Screen name="Movies" component={MoviesScreen}
            options={{
                title: "Movies", 
                headerStyle: {
                    backgroundColor: '#000'
                }, 
                headerTitleStyle:{
                    color: '#fff'
                }
            }} /> 

            <Tab.Screen name="Search" component={SearchScreen}/>

            <Tab.Screen name="TVShows" component={TVShowsScreen} />

            <Tab.Screen name ='Details' component={ShowScreen} 
        
             />

        </Tab.Navigator>

    </NavigationContainer>
)


export default AppStack;