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
        <Tab.Navigator initialRouteName="Search">
            <Tab.Screen name="Search" component={SearchScreen}
            options={{
                title: "Search Results", 
                headerStyle: {
                    backgroundColor: '#000'
                }, 
                headerTitleStyle:{
                    color: '#fff'
                }
            }} /> 

            <Tab.Screen name="Movies" component={MoviesScreen}/>

            <Tab.Screen name="TVShows" component={TVShowsScreen} />

            <Tab.Screen name ='Details' component={ShowScreen} 
            

             />


        </Tab.Navigator>

    </NavigationContainer>
)


export default AppStack;