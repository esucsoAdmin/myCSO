import React from 'react';
import {Platform, Text, View, StyleSheet} from "react-native";
import {Header} from 'react-native-elements';
import styles from '../styles/HomeStyleSheet';
import headerStyles from '../styles/HeaderStyleSheet';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'Home', style: headerStyles.header }}
                    containerStyle={headerStyles.headerContainer}
                />
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.welcome}>Let's make the CSO app!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
            </View>
        )
    }
}

export default HomeScreen;