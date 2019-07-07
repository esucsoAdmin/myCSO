import React from "react";
import {Text, View} from "react-native";
import headerStyles from "../styles/HeaderStyleSheet";
import {Header} from "react-native-elements";

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'Account', style: headerStyles.header }}
                    containerStyle={headerStyles.headerContainer}
                />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Your Account!</Text>
                </View>
            </View>

        );
    }
}

export default AccountScreen;