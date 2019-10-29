import React from "react";
import {View, ScrollView} from "react-native";
import headerStyles from "../styles/HeaderStyleSheet";
import {ThemeProvider} from "react-native-elements";
import theme from '../styles/GreenBlackTheme';
import generateCard from '../component-generators/CardGenerator';

class AboutScreen extends React.Component {

    render() {
        let imagePathRaspPi = '../resources/images/raspberrypi_edited.jpg';
        let imagePathVR = '../resources/images/graphics_card_vive.jpg';
        let imagePathMentor = '../resources/images/csologo_square.png';
        return (
            <View style={headerStyles.container}>
                {/*<Header*  Keeping this here as a reference for what styles where used for the header /}
                {/*    leftComponent={{text: 'About', style: headerStyles.header}}*/}
                {/*    containerStyle={headerStyles.headerContainer}*/}
                {/*/>*/}

                <ScrollView showsVerticalScollIndicator={false} style={{backgroundColor: '#9fa2a6'}}>
                    <ThemeProvider theme={theme}>

                        {generateCard('Raspberry Pi - Projects', require(imagePathRaspPi), {
                            marginBottom: 10,
                            color: '#00ff07'
                        },
                            'With 5 Raspberry Pi model B+ and 2 Raspberry Pi model 2 you can be sure we have tons of ' +
                            'different projects to work on and explore!', 'View Projects    ', 'binoculars')}

                        {generateCard('VR Equipped', require(imagePathVR), {marginBottom: 10, color: '#00ff07'},
                            'With the power of an RX 580 to support our HTC Vive and a robot arm you can imagine we ' +
                            'are doing some cool things!', 'View Projects    ', 'binoculars')}

                        {generateCard('CSO Mentor Program', require(imagePathMentor), {
                            marginBottom: 10,
                            color: '#00ff07'
                        },
                            'As it is part of our mission to give back as much as we can it felt only fitting that ' +
                            'the CSO have a mentor program to along with it.', 'Learn more now    ', 'clone')}

                    </ThemeProvider>
                </ScrollView>
            </View>

        );
    }
}

export default AboutScreen;