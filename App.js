import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import TrackCreate from "./src/screens/TrackCreate";
import TrackDetail from "./src/screens/TrackDetail";
import TrackList from "./src/screens/TrackList";
import { Provider as AuthProvider} from "./src/context/authContext"
import { setNavigator } from "./src/navigationRef"

//the switch navigator will contain other different navigators. Remember there are different kind of navigators in react native
const switchNavigator = createSwitchNavigator({ //The switch navigator makes abrupts navigations like when you signIn to a page and does not have a return or go back option
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
        <AuthProvider>
            {/* we pass the navigator obj that allows navigation to the setNavigator fn that we created, so that fn will have acces to the navigator obj */}
            <App ref={(navigator) => {setNavigator(navigator)}}/> 
        </AuthProvider>
    )
}