import * as React from 'react';
import {View, ScrollView, Image, ImageBackground, Dimensions} from 'react-native';
import {BackgroundView} from '../../components/background-view/BackgroundView.component';
import {Button, Card, Input, Item, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {PasswordRecoverStyle} from './PasswordRecover.style';
import {User} from "../../model/user-model/UserModel";
import {LoginStyle} from "../login/Login.style";
import {scale} from "../../styles/scale.style";

export class PasswordRecover extends React.Component {


    static navigationOptions = {
        headerShown: false,
    };

    passwordRecover = (username) => {
        User.recoverPassword(username).then(() => {
            this.props.navigation.goBack()
        })
    }

    state = {
        username: ""
    }

    render() {
        const {username} = this.state
        return <ScrollView contentContainerStyle={PasswordRecoverStyle.scrollview}>
            <BackgroundView>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: Dimensions.get("screen").height / 3.5
                }}
                    // source={require('../../assets/login/header.png')}
                >
                    <Image style={{height: 80, width: scale(200)}} source={require("../../assets/logo/logo.png")}/>
                </View>
                {/*<Image source={require("../../assets/login/backi.png")}*/}
                {/*       style={{*/}
                {/*           width: "100%",*/}
                {/*           height: scale(300),*/}
                {/*           position: "absolute",*/}
                {/*           top: Dimensions.get("screen").height / 4.5*/}
                {/*       }}/>*/}
                <ImageBackground
                    style={{
                        width: "100%",
                        height: Dimensions.get("screen").height / 2,
                        // position: "absolute",
                        bottom: 0
                    }}
                    // source={require('../../assets/login/bottom.png')}
                >
                    <View style={PasswordRecoverStyle.container}>
                        <View style={{width: "80%", alignItems: "center"}}>
                            {/*<View style={PasswordRecoverStyle.userImageContainer}>*/}
                            {/*    <Image resizeMode={"stretch"} source={require('../../assets/logo/logo-black.png')}*/}
                            {/*           style={PasswordRecoverStyle.userImage}*/}
                            {/*    />*/}
                            {/*</View>*/}
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'user'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input placeholder={'User Name'} style={PasswordRecoverStyle.inputText}
                                           onChangeText={(username) => {
                                               this.setState({
                                                   username
                                               })
                                           }}/>
                                </Item>
                            </Card>
                            <Button style={LoginStyle.sendButton} onPress={() => {
                                this.passwordRecover(username)
                            }}>
                                <Text style={LoginStyle.sendButtonText}>
                                    Recover Password
                                </Text>
                            </Button>
                            <Text style={PasswordRecoverStyle.registrationText}>
                                Already Account?
                            </Text>
                            <Button transparent onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}>
                                <Text style={PasswordRecoverStyle.registrationButtonText}>
                                    LOGIN
                                </Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </BackgroundView>
        </ScrollView>
    }
}
