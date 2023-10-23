import { Text, StyleSheet, View} from 'react-native'

const TrackDetail = () => {
    return (
        <View>
            <Text style={styles.titles}>Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titles: {
        fontSize:30
    }
});

export default TrackDetail;