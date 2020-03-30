import * as React from 'react';
import {View, ScrollView, ImageBackground, Dimensions, Image} from 'react-native';
import {BackgroundView} from '../../components/background-view/BackgroundView.component';
import SafeAreaView from 'react-native-safe-area-view';
import {LoginStyle} from './Login.style';
import {AdminHomeStyle} from '../admin/admin-home/adminHome.style';
import {CreateMessageStyle} from '../admin/admin-home/create-message/CreateMessage.style';
import {Button, Card, Input, Item, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {replaceWith} from "../../App";
import {User} from "../../model/user-model/UserModel";
import {scale} from "../../styles/scale.style";

export class Login extends React.Component {


    static navigationOptions = {
        headerShown: false,
    };

    state = {}
    makeLogin = (username, password) => {
        User.login(username, password).then(({user}) => {
            User.getUser().then(({user}) => {
                // alert(JSON.stringify(user))
                if (user.admin) {
                    replaceWith('AdminHome')
                } else {
                    replaceWith('Home');
                }
            })
            // this.props.navigation.navigate("user")
        })
    }

    render() {
        const {username, password} = this.state
        return <ScrollView contentContainerStyle={LoginStyle.scrollview}>
            <BackgroundView>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: Dimensions.get("screen").height / 3.5
                }}>
                    {/*source={require('../../assets/login/header.png')}>*/}
                    <Image style={{height: 80, width: scale(200)}} source={require("../../assets/logo/logo.png")}/>
                </View>
                {/*<Image source={require("../../assets/login/backi.png")}*/}
                {/*       style={{*/}
                {/*           width: "100%",*/}
                {/*           height: scale(300),*/}
                {/*           position: "absolute",*/}
                {/*           top: Dimensions.get("screen").height / 4.5*/}
                {/*       }}/>*/}
                <View
                    style={{
                        width: "100%",
                        height: Dimensions.get("screen").height / 2,
                        // position: "absolute",
                        bottom: 0
                    }}
                    // source={require('../../assets/login/bottom.png')}
                >
                    <View style={LoginStyle.container}>
                        {/*<View style={LoginStyle.userImageContainer}>*/}
                        {/*    <Image resizeMode={"stretch"} source={require('../../assets/logo/logo-black.png')}*/}
                        {/*           style={LoginStyle.userImage}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        {/*<Card style={LoginStyle.inputCard}>*/}
                        <View style={{width: "80%", alignItems: "center"}}>
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'user'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input placeholder={'User Name'}
                                           style={LoginStyle.inputText}
                                           onChangeText={(username) => {
                                               this.setState({
                                                   username
                                               })
                                           }}/>
                                </Item>
                            </Card>
                            {/*</Card>*/}
                            <Card style={LoginStyle.inputCard}>
                                <Icon name={'lock'} style={LoginStyle.textIcon}/>
                                <Item style={LoginStyle.inputItem}>
                                    <Input secureTextEntry placeholder={'Password'}
                                           style={LoginStyle.inputText}
                                           onChangeText={(password) => {
                                               this.setState({
                                                   password
                                               })
                                           }}/>
                                </Item>
                            </Card>
                            <Button style={LoginStyle.sendButton} onPress={() => {
                                // if (username && username.toLowerCase() === "admin") {
                                //     replaceWith("AdminHome")
                                // } else {
                                //     replaceWith("Home")
                                // }
                                this.makeLogin(username, password)
                            }}>
                                <Text style={LoginStyle.sendButtonText}>
                                    Login
                                </Text>
                            </Button>
                            <Button transparent onPress={() => {
                                this.props.navigation.navigate('PasswordRecover');
                            }}>
                                <Text style={LoginStyle.registrationButtonText}>
                                    Password Recover
                                </Text>
                            </Button>
                            <Text style={LoginStyle.registrationText}>
                                Have not Account yet?
                            </Text>
                            <Button transparent onPress={() => {
                                this.props.navigation.navigate('Registration');
                            }}>
                                <Text style={LoginStyle.registrationButtonText}>
                                    REGISTER NOW
                                </Text>
                            </Button>
                        </View>
                        {/*</Card>*/}
                    </View>
                </View>
            </BackgroundView>
        </ScrollView>
    }
}
