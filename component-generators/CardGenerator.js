import React from "react";
import {Linking, Text} from "react-native";
import {Card, Button} from "react-native-elements";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import theme from '../styles/GreenBlackTheme';


function generateCard(title, imageSource, style, text, btnTitle, iconName) {
    return (
        <Card
            title={title}
            image={imageSource}>
            <Text style={style}>
                {text}
            </Text>

            <Button
                title={btnTitle}
                icon={<FontAwesome5Icon name={iconName} color={theme.FontAwesome5Icon.color}/>}
                iconRight/>

        </Card>);
}

export default generateCard

export function generateInternetCard(title, imageSource, style, text, btnTitle, iconName, url) {
    return (
        <Card
            title={title}
            image={imageSource}>
            <Text style={style}>
                {text}
            </Text>

            <Button
                title={btnTitle}
                onPress={() => {
                    Linking.openURL(url)
                }}
                icon={<FontAwesomeIcon name={iconName} color={theme.FontAwesome5Icon.color}/>}
                iconRight/>

        </Card>);
}
