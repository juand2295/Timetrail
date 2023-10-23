import { Text, StyleSheet, View, Button} from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View>
            <Text style={styles.titles}>SignIn</Text>
            <Button title='Go to Sign Up' onPress={() => navigation.navigate('SignUp')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default SignIn;