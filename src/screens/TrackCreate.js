import { StyleSheet, View} from 'react-native'
import Map from '../components/Map';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { useContext, useEffect, useState } from 'react';
// import '../_mockLocation' //only if we dont want to use the location simulator or if we are testing in the physical device to simulate movement
import {Context as LocationContext} from "../context/locationContext"

const TrackCreate = () => {
    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, (location) => { //this location object is the one the device send every time the location is updated
            addLocation(location)
          });
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
    };

    useEffect(()=> {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
                <Text h1>Create Track</Text>
            </Spacer>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default TrackCreate;