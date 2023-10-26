import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload //we dont add in the tracks to our existing state because in general we always treat our API as total source of truth
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: response.data})
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    {createTrack, fetchTracks},
    []
)