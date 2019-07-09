import {StyleSheet} from 'react-native';

const headerStyles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },
    header: {
        color: '#00ff07',
        fontWeight: "bold",
        fontSize: 22,
        zIndex: 1,
        lineHeight: 23
    },
    headerContainer: {
        alignContent: 'space-around',
        height: 'auto',
        backgroundColor: '#000000',
    },
});

export default headerStyles;