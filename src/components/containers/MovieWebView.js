import React, {useLayoutEffect} from "react";
import ShareIcon from "../icons/ShareIcon";
import WebView from "react-native-webview";

const MovieWebView = ({navigation, route}) =>{
    const {uri} = route.params

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=> <ShareIcon route={route} />
        })
    }, [navigation])

    return <WebView source ={{uri}} />
}

export default MovieWebView;