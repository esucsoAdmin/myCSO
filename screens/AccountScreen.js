import React from "react";
import {Text, View} from "react-native";
import headerStyles from "../styles/HeaderStyleSheet";

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Your Account!</Text>
                </View>
            </View>

        );
    }
}

export default AccountScreen;