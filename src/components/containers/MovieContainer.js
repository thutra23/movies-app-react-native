import { Center, Box, Text, Button } from "native-base";
import React from "react";

 const MovieContainer = ({navigation}) => {
     return(
         <>
            <Box>
                <Center py={10}>
                    <Text>Movie title: 
                        {/* {title} */}
                        
                        </Text>
                    <Text>Popularity: 
                        {/* {popularity}  */}
                        </Text>
                    <Text>Release Date: 
                        {/* {date} */}
                        </Text>
                    <Button onPress={()=>{
                        navigation.navigate('Web', {title, uri}
                        )
                    }}>More Details</Button>
                </Center>
            </Box>
         </>
     )
 }

 export default MovieContainer;