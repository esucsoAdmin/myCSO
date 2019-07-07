import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import AboutScreen from './screens/AboutScreen';
import AccountScreen from './screens/AccountScreen';
import SettingsScreen from './screens/SettingsScreen';

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
            Inventory: {screen: InventoryScreen},
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
                inactiveTintColor: '#9fa2a6',
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black',
            },
            initialRouteName: 'Home',
        }
    )
);
