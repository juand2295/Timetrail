import { Text, StyleSheet, View} from 'react-native'

const AccountScreen = () => {
    return (
        <View>
            <Text style={styles.titles}>AccountScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default AccountScreen;