import createDataContext from "./createDataContext";

//this function will only be called by react only whenever we call that dispatch function
const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state
    }
};

// functions that will be used in our reducer
const signup = (dispatch) => { // the dispatch prop will give access to the inner fn being returned the dispatch function
    return ({email, password}) => {  //this fn being return is what the fn will actually do
        // make api req 

        // if we signup ,modify state to tell we authenticated

        //if fails we need to handle the error
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
    { isSignedIn: false}
);