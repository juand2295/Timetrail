import { Text, StyleSheet, View, Button} from 'react-native'

const TrackList = ({navigation}) => {
    return (
        <View>
            <Text style={styles.titles}>Track list</Text>
            <Button title='Go to track detail' onPress={() => navigation.navigate('TrackDetail')}/>
            <Button title='Sign Out' onPress={() => navigation.navigate('SignIn')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default TrackList;