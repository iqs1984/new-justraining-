import * as React from 'react';
import {View, ScrollView, Image, ImageBackground, Dimensions} from 'react-native';
import {BackgroundView} from '../../components/background-view/BackgroundView.component';
import {Button, Card, Input, Item, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {RegistrationStyle} from './Registration.style';
import {replaceWith} from "../../App";
import {User} from "../../model/user-model/UserModel";
import {LoginStyle} from "../login/Login.style";
import {scale} from "../../styles/scale.style";

export class Registration extends React.Component {


    static navigationOptions = {
        headerShown: false,
    };

    createUser = (username, email, password, name) => {
        User.createUser(username, email, password, name).then(() => {
            this.props.navigation.goBack()
        })
    }

    state = {
        username: "",
        email: "",
        password: "",
        name: ""
    }

    render() {
        const {
            username,
            email,
            password,
            name
        } = this.state
        return <ScrollView contentContainerStyle={RegistrationStyle.scrollview}>
            <BackgroundView>
                <ImageBackground style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: Dimensions.get("screen").height / 3.5
                }}
                    // source={require('../../assets/login/header.png')}
                >
                    <Image style={{height: 80, width: scale(200)}} source={require("../../assets/logo/logo.png")}/>
                </ImageBackground>
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
                        height: Dimensions.get("screen").height / 1.8,
                        // position: "absolute",
                        bottom: 0
                    }}
                    // source={require('../../assets/login/bottom.png')}
                >
                    <View style={RegistrationStyle.container}>
                        {/*<View style={RegistrationStyle.userImageContainer}>*/}
                        {/*    <Image resizeMode={"stretch"} source={require('../../assets/logo/logo-black.png')}*/}
                        {/*           style={RegistrationStyle.userImage}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        <View style={{width: "80%", marginTop: "15%", alignItems: "center"}}>
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'user'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input placeholder={'Name'}
                                           style={RegistrationStyle.inputText}
                                           onChangeText={(name) => {
                                               this.setState({
                                                   name
                                               })
                                           }}/>
                                </Item>
                            </Card>
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'user'}
                                      style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input placeholder={'User Name'}
                                           style={RegistrationStyle.inputText}
                                           onChangeText={(username) => {
                                               this.setState({
                                                   username
                                               })
                                           }}/>
                                </Item>
                            </Card>
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'mail'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input placeholder={'Email Address'}
                                           style={RegistrationStyle.inputText}
                                           onChangeText={(email) => {
                                               this.setState({
                                                   email
                                               })
                                           }}
                                    />
                                </Item>
                            </Card>
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'lock'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input secureTextEntry placeholder={'Password'}
                                           style={RegistrationStyle.inputText}
                                           onChangeText={(password) => {
                                               this.setState({
                                                   password
                                               })
                                           }}
                                    />
                                </Item>
                            </Card>
                            <Button style={LoginStyle.sendButton} onPress={() => {
                                this.createUser(username, email, password, name)
                            }}>
                                <Text style={LoginStyle.sendButtonText}>
                                    Sign Up
                                </Text>
                            </Button>
                            <Text style={RegistrationStyle.registrationText}>
                                Already Account?
                            </Text>
                            <Button transparent onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}>
                                <Text style={RegistrationStyle.registrationButtonText}>
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
