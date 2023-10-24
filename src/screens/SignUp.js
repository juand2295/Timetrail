import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { useState, useContext } from 'react';
import { Context as AuthContext} from '../context/authContext';


const SignUp = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Input 
                    label="Password" 
                    value={password} 
                    secureTextEntry
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                {state.errorMessage ?<Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
            </Spacer>
            <Spacer>
                <Button title='Sign Up' onPress={()=> signup({email, password})}/>
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
    errorMessage: {
        fontSize: 16,
        color:'red'
    }
});

export default SignUp;