import { StyleSheet } from 'react-native'
import { Input, Button, Text } from '@rneui/themed';
import { useState } from 'react';
import Spacer from '../components/Spacer';

const AuthForm = ({ header, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3 style={{marginLeft: 10, fontWeight: 'bold'}}>{header}</Text>
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
                {errorMessage ?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            </Spacer>
            <Spacer>
                <Button title={buttonText} onPress={()=> onSubmit({email, password})}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color:'red'
    },
});

export default AuthForm;