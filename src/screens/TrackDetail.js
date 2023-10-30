import { useContext } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { Context as TrackRecordsContext } from "../context/TrackRecordsContext"
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Button } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';

const TrackDetail = ({navigation}) => {
    const _id = navigation.getParam('_id')
    const { state, deleteTrack } = useContext(TrackRecordsContext)
    const track = state.find( t => t._id === _id)
    console.log(track.locations[track.locations.length-1].timestamp)
    const startDate = new Date(track.locations[0].timestamp)
    const endDate = new Date(track.locations[track.locations.length-1].timestamp)
    const startDateFormated = startDate.getHours() + ":" + startDate.getMinutes() + ", "+ startDate.toDateString();
    const endDateFormated = endDate.getHours() + ":" + endDate.getMinutes() + ", "+ endDate.toDateString();

    const intialCoords = track.locations[0].coords

    return (
        <>  
            <NavigationEvents onWillBlur={fetchTracks}/>
            <Text style={styles.title}>{track.name}</Text>
            <MapView 
            style={styles.map}
            initialRegion={{
                ...intialCoords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={track.locations.map(location => location.coords)} strokeColor='rgba(58,58,255,0.7)' strokeWidth={2.5}/>
        </MapView>
        <Text style={styles.subtitle}>Track Details: </Text>
        <Text style={styles.bullet}><Text style={{fontWeight:'bold'}}>Started: </Text>{startDateFormated}</Text>
        <Text style={styles.bullet}><Text style={{fontWeight:'bold'}}>Finished: </Text>{endDateFormated}</Text>
        <Spacer>
        <Button
                    title="Delete Track"
                    onPress={() => {
                        deleteTrack(_id)
                        navigation.navigate('TrackList')
                    }}
                />
        </Spacer>
        </>
    )
}

TrackDetail.navigationOptions = {
    title: ''
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal:15
    },
    map: {
        height: 400,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal:15
    },
    bullet: {
        fontSize: 16,
        marginBottom: 3,
        marginHorizontal:15
    },
});

export default TrackDetail;