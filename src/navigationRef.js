//THIS WILL ALLOW NAVIGATION IN ALL COMPONENTS INCLUDING THOSE THAT ARE NOT RENDER IN OUR STACKNAVIGATOR
import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
};