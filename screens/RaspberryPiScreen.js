import React from "react";
import {Text, View, ScrollView} from "react-native";
import headerStyles from "../styles/HeaderStyleSheet";
import {Header, Card, Button, ThemeProvider} from "react-native-elements";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles/GreenBlackTheme';


class AboutScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'About', style: headerStyles.header}}
                    containerStyle={headerStyles.headerContainer}
                />
                <ScrollView showsVerticalScollIndicator={false} style={{backgroundColor: 'grey'}}>
                    <ThemeProvider theme={theme}>
                        <Card
                            title='Raspberry Pi - Projects'
                            image={require('../resources/images/raspberrypi_edited.jpg')}>
                            <Text style={{marginBottom: 10, color: '#00ff07'}}>
                                We have swapped pages but have still messed up
                            </Text>

                            <Button
                                title='View Projects    '
                                icon={<FontAwesome5Icon name='binoculars' color={theme.FontAwesome5Icon.color}/>}
                                iconRight/>

                        </Card>

                        <Card
                            title='VR Equipped'
                            image={require('../resources/images/graphics_card_vive.jpg')}>

                            <Text style={{marginBottom: 10, color: '#00ff07'}}>
                                With the power of an RX 580 to support our HTC Vive and a robot arm you can imagine we
                                are doing some cool things!
                            </Text>
                            <Button
                                title='View Projects    '
                                icon={<FontAwesome5Icon name='binoculars' color={theme.FontAwesome5Icon.color}/>}
                                iconRight/>

                        </Card>
                        <Card
                            title='CSO Mentor Program'
                            image={require('../resources/images/csologo_square.png')}>

                            <Text style={{marginBottom: 10, color: '#00ff07'}}>
                                As it is part of our mission to give back as much as we can it felt only fitting that
                                the CSO have a mentor program to along with it.
                            </Text>
                            <Button
                                title='Learn more now    '
                                icon={<FontAwesome5Icon name='clone' color={theme.FontAwesome5Icon.color}/>}
                                iconRight/>
                        </Card>
                    </ThemeProvider>
                </ScrollView>
            </View>

        );
    }
}

export default AboutScreen;