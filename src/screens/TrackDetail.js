import { useContext } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { Context as TrackRecordsContext } from "../context/TrackRecordsContext"
import MapView, { Polyline, Circle } from 'react-native-maps'

const TrackDetail = ({navigation}) => {
    const _id = navigation.getParam('_id')
    const { state } = useContext(TrackRecordsContext)
    const track = state.find( t => t._id === _id)
    const intialCoords = track.locations[0].coords

    return (
        <>
            <Text style={styles.titles}>{track.name}</Text>
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
        </>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    },
    map: {
        height: 300,
    }
});

export default TrackDetail;