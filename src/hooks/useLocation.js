import { useEffect, useState } from "react";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location'; 

export default (shouldTrack, callback) => { //shouldTrack is a boolean that tell when to strat tracking, it comes from isFocus on trackCreate screen
    const [err, setErr] = useState(null)

    useEffect(()=> {
        let subscriber;

        const startWatching = async () => {
            try {
              const { granted } = await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
              },
            //   }, (location) => { //this location object is the one the device send every time the location is updated
            //     addLocation(location)
            //     }
              callback  //in order to make the fn reusable we will call a callback fn every time we get a location update instead of the addLocation fn
              );
              
              if (!granted) {
                throw new Error('Location permission not granted');
              }
            } catch (e) {
              setErr(e);
            }
        };

        if(shouldTrack){
        startWatching()
        } else {
            if (subscriber){
                subscriber.remove() // .remove() is a fn from watchPositionAsync that stops the tracking
            }
            subscriber = null // when we stop tracking we do not need the subscriber state anymore
        }
        return () => {//cleanup fn: when we run watchPositionAsync a listener is set to watch whenever the position changes and if we don't remove this listener the next time useEffect re runs another listener for watchPositionAsync will be set so we need to return a clenup fn to cleanup the previous listener 
            if (subscriber) {
                subscriber.remove()
            }
        }
    }, [shouldTrack, callback]) // callback was created using useCallback so it will only changes when the array of dependencies attached to it changes

    return [err] // we will return an error if an error occurs during the opermission process
}