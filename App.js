import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Let's make the CSO app!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        )
    }
}

class RedScreen extends React.Component {
    render() {
        return (
            <View style={styles.container2}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Let's make the CSO app!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>

            </View>
        )
    }
}

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>About the CSO!</Text>
            </View>
        );
    }
}

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Your Account!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>All the settings you need!</Text>
            </View>
        );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const {routeName} = navigation.state;
    let Icon = FontAwesome5Icon;
    let iconName;

    if (routeName === 'Home') {
        iconName = `${focused ? 'door-open' : 'home'}`;

        // We want to add badges to home tab icon
        // IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Settings') {
        iconName = `cog${focused ? '' : 's'}`;

        // ${focused ? '' : '-outline'}`;
    } else if (routeName === 'Inventory') {
        iconName = `${focused ? 'inbox' : 'archive'}`;

    } else if (routeName === 'About') {
        iconName = `info${focused ? '' : '-circle'}`;

    } else if (routeName === 'Account') {
        iconName = `user${focused ? '' : '-circle'}`;
    }


    // You can return any component that you like here!
    return <Icon name={iconName} size={25} color={tintColor}/>;
};

export default createAppContainer(
    createBottomTabNavigator({
            Inventory: {screen: RedScreen},
            About: {screen: AboutScreen},
            Home: {screen: HomeScreen},
            Account: {screen: AccountScreen},
            Settings: {screen: SettingsScreen},
        },
        {
            defaultNavigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) =>
                    getTabBarIcon(navigation, focused, tintColor),
            }),
            tabBarOptions: {
                activeTintColor: '#00ff07',
                inactiveTintColor: 'grey',
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black',
            },
            initialRouteName: 'Home',
        }
    )
);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        alignContent: 'space-around',
        backgroundColor: '#3b9044',
        borderTopWidth: 60,
        borderTopColor: '#444444'
    },
    container2: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        alignContent: 'space-around',
        backgroundColor: '#901e1e',
        borderTopWidth: 60,
        borderTopColor: '#444444'
    },
    welcome: {
        borderWidth: 20,
        borderColor: '#444444',
        fontSize: 20,
        textAlign: 'center',
        margin: 'auto',
    },
    instructions: {
        textAlign: 'left',
        color: '#333333',
        margin: 'auto',
    },
});
