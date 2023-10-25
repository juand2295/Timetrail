import { Text, StyleSheet, View, Button} from 'react-native'
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useContext } from 'react';
import { Context as AuthContext} from '../context/authContext';
import { NavigationEvents } from 'react-navigation';


const SignIn = () => {
    const {state, signin, clearError} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearError} // para borrar el error cuando navegamos de signin a signup
            />
            <AuthForm 
                header='Sign In to Hiketracker' 
                errorMessage={state.errorMessage} 
                buttonText='Sign In'
                onSubmit={signin}
            />
            <Spacer>
                <NavLink
                    routeName='SignUp'
                    text="Don't have an account? Sign Up"
                />
            </Spacer>
        </View>
    )
}

SignIn.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    },
    container: {
        flex: 1,
        justifyContent:'center',
        marginBottom: 250
    },
});

export default SignIn;