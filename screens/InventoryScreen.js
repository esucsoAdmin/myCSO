import React from 'react';
import {Platform, Text, View} from "react-native";
import styles from '../styles/InventoryStyleSheet';
import headerStyles from '../styles/HeaderStyleSheet';
import {Header} from "react-native-elements";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class InventoryScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'Inventory', style: headerStyles.header }}
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

export default InventoryScreen;