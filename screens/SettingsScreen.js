import React from "react";
import {Text, View} from "react-native";
import headerStyles from '../styles/HeaderStyleSheet';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>All the settings you need!</Text>
                </View>
            </View>

        );
    }
}

export default SettingsScreen;