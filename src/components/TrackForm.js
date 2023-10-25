import { StyleSheet, View} from 'react-native'
import { Text, Button, Input } from '@rneui/themed';
import Spacer from './Spacer';

const TrackForm = () => {
    return (
        <>
            <Spacer>
                <Input placeholder='Track Name'/>
            </Spacer>
            <Button title="Start Recording" style={styles.button}/>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal:15,
        fontWeight: 'bold'
    }
});

export default TrackForm;