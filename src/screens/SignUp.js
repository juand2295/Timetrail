import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignUp = ({navigation}) => {
    const {state, signup, clearError} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearError} // para borrar el error cuando navegamos de signin a signup
            />
            <AuthForm 
                header='Sign Up for Hiketracker' 
                errorMessage={state.errorMessage} 
                buttonText='Sign Up'
                onSubmit={signup}
            />
            <Spacer>
                <NavLink
                    routeName='SignIn'
                    text='Already have an account? Sign In'
                />
            </Spacer>
        </View>
    )
}

SignUp.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        marginBottom: 250
    },
});

export default SignUp;