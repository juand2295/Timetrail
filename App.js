import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import TrackCreate from "./src/screens/TrackCreate";
import TrackDetail from "./src/screens/TrackDetail";
import TrackList from "./src/screens/TrackList";
import { Provider as AuthProvider} from "./src/context/AuthContext"
import { setNavigator } from "./src/navigationRef"
import LoadingScreen from "./src/screens/LoadingScreen";
import { Provider as LocationProvider} from "./src/context/LocationContext"
import { Provider as TrackProvider } from "./src/context/TrackRecordsContext"

//the switch navigator will contain other different navigators. Remember there are different kind of navigators in react native
const switchNavigator = createSwitchNavigator({ //The switch navigator makes abrupts navigations like when you signIn to a page and does not have a return or go back option
    loading: LoadingScreen, // this will only be used so when the user has a token storen in the mobile AsyncStorage, he will not see the signup form while the asyncronous operation of checking for the token finishes
    loginNavigator: createStackNavigator({
        SignUp: SignUp,
        SignIn: SignIn
    }),
    mainNavigator: createMaterialBottomTabNavigator({
        trackListNavigator: createStackNavigator({
            TrackList: TrackList,
            TrackDetail: TrackDetail
        }),
        TrackCreate: TrackCreate,
        Account: AccountScreen,
    })
})

//we do all this behind to be able to pass our context to all the components rendered in the app
const App =  createAppContainer(switchNavigator) 

export default () => {
    return (
        <TrackProvider>
        <LocationProvider>
        <AuthProvider>
            {/* we pass the navigator obj that allows navigation to the setNavigator fn that we created, so that fn will have acces to the navigator obj */}
            <App ref={(navigator) => {setNavigator(navigator)}}/> 
        </AuthProvider>
        </LocationProvider>
        </TrackProvider>
    )
}