import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation'; //we can use withNavigation because we are navigating inside the same navigator even if it's a child component

const NavLink = ({navigation, text, routeName}) => {

    return (
        <TouchableOpacity onPress={()=> {
            navigation.navigate(routeName)
        }}>
            <Text style={styles.link}>{text}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        color: 'blue',
        textAlign:'center'
    }
});

export default withNavigation(NavLink); //allows us to have access to the navigation prop