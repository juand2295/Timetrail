import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);


        //loop over all our diff actions inside our actions object, we need to call each of those with dispatch so react can send them to the reducer
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            //this is the actual react component that makes our data available to all the components render underneat it
            <Context.Provider value={{state, ...boundActions}}> 
                {children}
            </Context.Provider>
        );
    };

    return { Context: Context, Provider: Provider}
}