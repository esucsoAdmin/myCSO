import React from 'react';
import {View, ScrollView} from "react-native";
import {ThemeProvider} from 'react-native-elements';
import headerStyles from '../styles/HeaderStyleSheet';
import theme from "../styles/GreenBlackTheme";
import {generateInternetCard} from "../component-generators/CardGenerator";

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });

class HomeScreen extends React.Component {
    render() {
        let imagePathGitHub = '../resources/images/cso_git.png';
        return (
            <View style={headerStyles.container}>
                <ScrollView showsVerticalScollIndicator={false} style={{backgroundColor: '#9fa2a6'}}>
                    <ThemeProvider theme={theme}>
                        {generateInternetCard('Follow our projects!', require(imagePathGitHub),
                            {marginBottom: 10, color: '#00ff07'},
                            'For an in depth look into what we do follow the development of all' +
                            ' our projects on the CSO github page, maybe you can become a contributor!',
                            'Visit our GitHub    ',
                            'github', 'https://github.com/esu-cso')}

                    </ThemeProvider>
                </ScrollView>
            </View>
        )
    }
}

export default HomeScreen;