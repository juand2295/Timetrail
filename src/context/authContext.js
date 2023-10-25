import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

//this function will only be called by react only whenever we call that dispatch function
const authReducer = (state, action) => {
    switch (action.type){
        case 'signin':
            return { token: action.payload, errorMessage:'' } // works for signup and in
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error':
            return {...state, errorMessage: ''}
        case 'signout':
            return { token: null, errorMessage: ''}
        default:
            return state
    }
};

// functions that will be used in our reducer
const signup = dispatch => { // the dispatch prop will give access to the inner fn being returned the dispatch function
    return async ({email, password}) => {  //this fn being return is what the fn will actually do
        try {
        // make api req 
        const response = await trackerApi.post('/signup/', {email, password})
        // if we signup ,modify state to tell we authenticated
        console.log(response.data.token)
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackList')
        } catch (error) {
            //if fails we need to handle the error
            dispatch({type: 'add_error', payload: 'Sorry! Try a different email account'}) //we use dispatch whenever we want to update our state
        }
    };
};

const signin = (dispatch) =>  async ({email, password}) => { 
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackList')
    } catch (error) {
        dispatch({type: 'add_error', payload: 'Wrong credentials!'})
    }
};


const signout = (dispatch) =>  async () => { 
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('SignIn')
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('SignIn')
    }
};

const clearError = (dispatch) => () => {
    dispatch({type: 'clear_error'})
};

export const { Provider, Context } = createDataContext( //Provider and Context coming from createDataContext and we will export it passing as arguments 1st: the reducer, 2nd: object with all our different actions and 3rd: our initial State 
    authReducer,
    {signin, signup, signout, clearError, tryLocalSignin, signout},
    { token: null, errorMessage:''}
);