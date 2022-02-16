import { Box, Button, Divider, Heading, Image, Text, Center, HStack, VStack } from "native-base";
import React from "react";

const MovieCard = props => {
    const { image, title, popularity, date, navigation } = props


    return (
        <Box  borderBottomWidth={1} borderBottomColor="gray.300" pb={5} mb={10} >
            <HStack space={4} >
                <Image source={{
                    uri:`https://image.tmdb.org/t/p/w500${image}`
                }} size="lg" ></Image>
           

            <VStack>
                    <Heading size='xs'>{title}</Heading>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {date}</Text>

                    <Button variant="ghost" onPress={()=>{
                        navigation.navigate('Show', {
                            title, 
                            uri
                        })
                    }}>More Details

                    </Button>

            </VStack>

            </HStack>   

        </Box>
    )
}

export default MovieCard;