import { useContext } from "react";
import { Context as TrackRecordsContext } from "../context/TrackRecordsContext"
import { Context as LocationContext } from '../context/LocationContext'
import {navigate} from '../navigationRef'

export default () => {
    const { createTrack } = useContext(TrackRecordsContext);
    const { state, resetForm } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(state.name, state.locations)
        resetForm();
        navigate('TrackList')
    }

    return [saveTrack] // we return this inside an array as convention (but we do not need to return it like that)
    // covention is from a hook return an array that has any number of values inside of it
}