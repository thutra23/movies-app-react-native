import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
import React from "react";
import { Share } from "react-native";

const ShareIcon = ({route}) =>{
    const {title, uri} = route.params

    const handleShareMovie = () =>{
        return Share.share({
            title, 
            uri
        }, 
        {
            dialogTitle: `share ${title}`
        })
    }

    return (
        <Button variant='ghost' color='gray.500'>
            <Icon as ={Ionicons} name='share-outline' onPress={()=>handleShareMovie} size={5} />

        </Button>
    )
}

export default ShareIcon;