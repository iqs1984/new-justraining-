import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {ChangePasswordStyle} from './changePassword.style';
import {Button, Card, Item, Input, Text} from 'native-base';
import {User} from "../../../../model/user-model/UserModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

export class ChangePassword extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Change Password',
        };
    };

    state = {
        password: "",
        new_password: "",
        confirm_password: ""
    }

    render() {
        const {password, new_password, confirm_password} = this.state
        return <BackgroundView>
            <View style={ChangePasswordStyle.container}>
                <ScrollView style={ChangePasswordStyle.scrollView}>
                    <Card style={ChangePasswordStyle.inputCard}>
                        <Item style={ChangePasswordStyle.inputItem}>
                            <Input secureTextEntry placeholder={'Old Password'}
                                   style={ChangePasswordStyle.inputText}
                                   defaultValue={password}
                                   onChangeText={password => this.setState({
                                       password
                                   })}
                            />
                        </Item>
                    </Card>
                    <Card style={ChangePasswordStyle.inputCard}>
                        <Item style={ChangePasswordStyle.inputItem}>
                            <Input secureTextEntry placeholder={'New Password'} style={ChangePasswordStyle.inputText}
                                   defaultValue={new_password}
                                   onChangeText={new_password => this.setState({
                                       new_password
                                   })}
                            />
                        </Item>
                    </Card>
                    <Card style={ChangePasswordStyle.inputCard}>
                        <Item style={ChangePasswordStyle.inputItem}>
                            <Input secureTextEntry placeholder={'Confirm Password'}
                                   style={ChangePasswordStyle.inputText}
                                   defaultValue={confirm_password}
                                   onChangeText={confirm_password => this.setState({
                                       confirm_password
                                   })}
                            />
                        </Item>
                    </Card>
                    <Button style={ChangePasswordStyle.submitButton} onPress={() => {
                        User.changePassword(password, new_password, confirm_password).then(() => {
                            this.setState({
                                password: "",
                                new_password: "",
                                confirm_password: ""
                            })
                        })
                    }}>
                        <Text style={ChangePasswordStyle.buttonText}>
                            Submit
                        </Text>
                    </Button>
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
