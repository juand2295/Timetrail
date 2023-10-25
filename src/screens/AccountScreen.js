import { Text, StyleSheet, View} from 'react-native'
import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
                <Text style={styles.titles}>AccountScreen</Text>
            </Spacer>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                /> 
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default AccountScreen;