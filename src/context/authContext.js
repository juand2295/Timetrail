import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

//this function will only be called by react only whenever we call that dispatch function
const authReducer = (state, action) => {
    switch (action.type){
        case 'signup':
            return { token: action.payload, errorMessage:'' }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
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
        dispatch({type: 'signup', payload: response.data.token})
        navigate('TrackList')
        console.log('kkk')
        } catch (error) {
            console.log('nop')
            //if fails we need to handle the error
            dispatch({type: 'add_error', payload: 'Sorry! Try a different email account'}) //we use dispatch whenever we want to update our state
        }
    };
};

const signin = (dispatch) => { 
    return ({email, password}) => { 

    };
};

const signout = (dispatch) => { 
    return () => { 

    };
};

export const { Provider, Context } = createDataContext( //Provider and Context coming from createDataContext and we will export it passing as arguments 1st: the reducer, 2nd: object with all our different actions and 3rd: our initial State 
    authReducer,
    {signin, signup, signout},
    { token: null, errorMessage:''}
);