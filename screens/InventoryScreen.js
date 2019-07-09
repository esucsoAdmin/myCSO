import React from 'react';
import {ScrollView, View} from "react-native";
import headerStyles from '../styles/HeaderStyleSheet';
import {Button, Card, Header, ThemeProvider, Text} from "react-native-elements";
import theme from '../styles/GreenBlackTheme';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

class InventoryScreen extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{text: 'Inventory', style: headerStyles.header}}
                    containerStyle={headerStyles.headerContainer}
                />
                <ScrollView showsVerticalScollIndicator={false} style={{backgroundColor: '#9fa2a6'}}>
                    <ThemeProvider theme={theme}>
                        <Card
                            title='Rent a Raspberry Pi'
                            image={require('../resources/images/raspberry_close_up.jpg')}>
                            <Text h3>5 model 3</Text>
                            <Text h3>2 model 2</Text>
                            <Text h3>3 SD cards</Text>
                            <Text h4>Peripherals available upon request</Text>
                            <Button
                                title='Request a Pi    '
                                icon={<FontAwesome5Icon name='raspberry-pi' color={theme.FontAwesome5Icon.color}/>}
                                iconRight/>

                        </Card>
                    </ThemeProvider>
                </ScrollView>
            </View>

        )
    }
}

export default InventoryScreen;