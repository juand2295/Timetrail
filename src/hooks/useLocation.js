import { useEffect, useState } from "react";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location'; 

export default (shouldTrack, callback) => { //shouldTrack is a boolean that tell when to strat tracking, it comes from isFocus on trackCreate screen
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
        //   }, (location) => { //this location object is the one the device send every time the location is updated
        //     addLocation(location)
        //     }
          callback  //in order to make the fn reusable we will call a callback fn every time we get a location update instead of the addLocation fn
          );
          setSubscriber(sub)
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
    };

    useEffect(()=> {
        if(shouldTrack){
        startWatching()
        } else {
            subscriber.remove() // .remove() is a fn from watchPositionAsync that stops the tracking
            setSubscriber(null) // when we stop tracking we do not need the subscriber state anymore
        }
    }, [shouldTrack])

    return [err] // we will return an error if an error occurs during the opermission process
}