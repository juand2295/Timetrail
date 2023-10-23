import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { useState } from 'react';


const SignUp = ({navigation}) => {
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
            </Spacer>
            <Spacer>
                <Button title='Sign Up'/>
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
    }
});

export default SignUp;