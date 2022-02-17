import { Select } from "native-base";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const DropDownMenu = () => {
    const {movieFilter, setMovieFilter} = props;

    return (
        <Center>
            <Select selectedValue={movieFilter}
            // _selectedItem={
                
            // }
            
            >

            </Select>

            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
            <Select.Item label="Now Playing" value="now_playing" />
        </Center>
    )
     
}