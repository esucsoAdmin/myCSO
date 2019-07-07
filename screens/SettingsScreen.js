import React from "react";
import {Text, View} from "react-native";
import headerStyles from '../styles/HeaderStyleSheet';
import {Header} from "react-native-elements";

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'Settings', style: headerStyles.header }}
                    containerStyle={headerStyles.headerContainer}
                />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>All the settings you need!</Text>
                </View>
            </View>

        );
    }
}

export default SettingsScreen;