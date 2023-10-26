import { StyleSheet, View} from 'react-native'
import { Text, Button, Input } from '@rneui/themed';
import Spacer from './Spacer';
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
    const { state: {name, recording, locations}, startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack(); // destructuring of the fn we imported from the hook
    
    return (
        <>
            <Spacer>
                <Input placeholder='Track Name' onChangeText={changeName} value={name}/>
            </Spacer>
            { 
                recording 
                ?<Button title="Stop Recording" style={styles.stop} onPress={stopRecording} color='error'/>
                :<Button title="Start Recording" style={styles.start} onPress={startRecording}/>
            }
            <Spacer>
            {
                !recording && locations.length
                ? <Button title="Save Recording" color='success' onPress={saveTrack}/>
                : null
            }
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    start: {
        marginHorizontal:15,
        fontWeight: 'bold'
    },
    stop: {
        marginHorizontal:15,
        fontWeight: 'bold'
    }
});

export default TrackForm;