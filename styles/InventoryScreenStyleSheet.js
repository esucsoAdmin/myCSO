import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        alignContent: 'space-around',
        backgroundColor: '#901e1e',
    },
    welcome: {
        borderWidth: 20,
        borderColor: 'grey',
        fontSize: 20,
        textAlign: 'center',
        margin: 'auto',
        color: 'black',
    },
    instructions: {
        textAlign: 'left',
        color: 'black',
        margin: 'auto',
    },
});

export default styles;