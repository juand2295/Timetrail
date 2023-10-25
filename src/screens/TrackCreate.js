import { StyleSheet } from 'react-native'
import Map from '../components/Map';
import { Text } from '@rneui/themed';
import { withNavigationFocus, SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { useCallback, useContext } from 'react';
// import '../_mockLocation' //only if we dont want to use the location simulator or if we are testing in the physical device to simulate movement
import {Context as LocationContext} from "../context/LocationContext"
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreate = ({isFocused}) => { // isFocused is a prop from withNavigationFocus that will help us know when a component is currently focus on the screen, this in order to stop tracking the location when the user is not recording or in the trakCreate screen to save battery
    const { state, addLocation } = useContext(LocationContext)
    // useCallback limits the amount of times a fn is created in memory, a new fn will only be created when the array of dependecies changes so we will be able to pass this callback to a useEffect hook without looping. 
    const callback = useCallback((location) => addLocation(location, state.recording), [state.recording]) // this will help us so when we pass callback to useEffect it doesn't enters a loop, this limits the amount of times we create a new callback fn in memory, it will only create a new fn when the array of dependecies changes
    const [err] = useLocation(isFocused || state.recording, callback) //records location when trackCreate screen is focused or when state.recording is set to true (so if we leave createTrack screen but we are recording the location still gets recorded)
    
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
                <Text h1>Create Track</Text>
            </Spacer>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default withNavigationFocus(TrackCreate)