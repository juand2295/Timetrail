import { Text, StyleSheet, View} from 'react-native'
import { Button } from '@rneui/themed';
import { useContext, useEffect } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

const AccountScreen = () => {
    const {signout, getEmail, state} = useContext(AuthContext)
    const insets = useSafeAreaInsets();

    useEffect(()=> {
        getEmail()
    }, [])

    return (
        <>
            <Spacer>
                <Text style={[styles.title, {paddingTop:insets.top}]}>Account</Text>
                <Text style={styles.text}>{state.email}</Text>
            </Spacer>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                /> 
            </Spacer>
        </>
    )
}

AccountScreen.navigationOptions = {
    tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="black" />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10
    },
    text: {
        fontSize: 20,
    }
});

export default AccountScreen;