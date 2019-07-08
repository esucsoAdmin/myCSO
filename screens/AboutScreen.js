import React from "react";
import {Text, View, ScrollView} from "react-native";
import headerStyles from "../styles/HeaderStyleSheet";
import {Header, Card, Button} from "react-native-elements";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'About', style: headerStyles.header }}
                    containerStyle={headerStyles.headerContainer}
                />
                <ScrollView showsVerticalScollIndicator={false} style={{backgroundColor: 'grey'}}>
                    <Card containerStyle={{backgroundColor: '#9fa2a6'}}
                        title='Raspberry Pi - Projects'
                        image={require('../resources/images/raspberrypi_edited.jpg')}>
                        <Text style={{marginBottom: 10}}>
                            With 5 Raspberry Pi model B+ and 2 Raspberry Pi model 2 you can be sure we have tons of different projects to work on and explore!
                        </Text>
                        <Button
                            //type="outline"
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000000'}}
                            title='View Projects    '
                            icon={<FontAwesome5Icon name='binoculars' color='#ffffff' />}
                            iconRight/>
                    </Card>
                    <Card containerStyle={{backgroundColor: '#9fa2a6'}}
                        title='VR Equipped'
                        image={require('../resources/images/graphics_card_vive.jpg')}>

                        <Text style={{marginBottom: 10}}>
                            With the power of an RX 580 to support our HTC Vive and a robot arm you can imagine we are doing some cool things!
                        </Text>
                        <Button

                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000000'}}
                            title='View Projects    '
                            icon={<FontAwesome5Icon name='binoculars' color='#ffffff' />}
                            iconRight/>
                    </Card>
                    <Card containerStyle={{backgroundColor: '#9fa2a6'}}
                          title='CSO Mentor Program'
                          image={require('../resources/images/csologo_square.png')}>

                        <Text style={{marginBottom: 10}}>
                            As it is part of our mission to give back as much as we can it felt only fitting that the CSO have a mentor program to along with it.
                        </Text>
                        <Button

                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000000'}}
                            title='Learn more now    '
                            icon={<FontAwesome5Icon name='clone' color='#ffffff' />}
                            iconRight/>
                    </Card>
                </ScrollView>
            </View>

        );
    }
}

export default AboutScreen;