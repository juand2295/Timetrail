import { useContext } from 'react'
import { Text, StyleSheet, View, ActivityIndicator} from 'react-native'
import MapView, {Polyline, Circle} from 'react-native-maps'
import { Context as LocationContext } from '../context/locationContext'


const Map = () => {
    const { state} = useContext(LocationContext)
    console.log(state)

    if (!state?.currentLocation) {
        return <ActivityIndicator size='large' style={{marginTop:200}}/>
    }
    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...state?.currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            // region={{ //this attribute recenters the map
            //     ...state?.currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
        >
            <Circle
                center={state?.currentLocation.coords}
                radius={30}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
            />
            {/* <Polyline coordinates={points}/> */}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;