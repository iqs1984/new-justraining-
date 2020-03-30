import * as React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {SplashStyle} from './splash.style';
import {replaceWith} from '../../App';
import {User} from "../../model/user-model/UserModel";
import {NavigationEvents} from "react-navigation";
import {scale} from "../../styles/scale.style";

export class Splash extends React.Component {

    componentDidMount(): void {


        // this.props.navigation.navigate("user")
    }

    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return <View style={SplashStyle.container}>
            <NavigationEvents onDidFocus={() => {
                User.getUser().then(({user}) => {
                    if (user && user.is_logged_in) {
                        user.admin ? replaceWith('AdminHome') : replaceWith('Home');
                    } else {
                        replaceWith("Login")
                    }
                    // setTimeout(() => {
                    //     replaceWith('Login');
                    //     // replaceWith('AdminHome');
                    // }, 3000);
                })
                // replaceWith('Home')
            }}/>
            {/*<Image style={SplashStyle.image}*/}
            {/*       resizeMode={'stretch'}*/}
            {/*       source={require('../../assets/splash/splash.png')}/>*/}
            <ImageBackground source={require("../../assets/background/background.png")} style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image source={require("../../assets/logo/logo.png")} style={{
                    width: scale(200),
                    height: scale(80)
                }}/>
            </ImageBackground>
        </View>;
    }
}
