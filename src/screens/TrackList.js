import { useContext } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import { Context as TrackRecordsContext } from "../context/TrackRecordsContext"
import { ListItem } from '@rneui/themed';


const TrackList = ({navigation}) => {
    const {fetchTracks, state} = useContext(TrackRecordsContext)

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} onDidFocus={fetchTracks}/>
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                    )
                }}
            />
            
        </>
    )
}

TrackList.navigationOptions ={
    title: 'Recorded Tracks'
}



const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default TrackList;