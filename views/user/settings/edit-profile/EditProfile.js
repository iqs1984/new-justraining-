import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {EditProfileStyle} from './editProfile.style';
import {Button, Card, Item, Input, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {TrainingStyle} from '../../training/Training.style';
import {User} from "../../../../model/user-model/UserModel";
import {PickImage} from "../../../../model/PickImage-model/PickImage";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

export class EditProfile extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Edit profile',
        };
    };

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            // alert(JSON.stringify(user))
            this.setState({
                firstName: user.player.fname,
                lastName: user.player.lname,
                username: user.username,
                mobile: user.player.mobile,
                email: user.player.email,
                image: user.player.image,
                load: true
            })
        })
    }

    state = {}

    render() {
        const {firstName, lastName, username, mobile, email, image, load} = this.state
        return <BackgroundView>
            <View style={EditProfileStyle.container}>
                {
                    load && <ScrollView style={EditProfileStyle.scrollView}>
                        <View style={EditProfileStyle.imageFullContainer}>
                            <Card style={EditProfileStyle.photoContainer}>
                                <Image style={EditProfileStyle.image}
                                       source={
                                           {
                                               uri: image.url
                                           }
                                       }/>
                                <Button style={EditProfileStyle.cameraButton} onPress={() => {
                                    PickImage.get().then((image) => {
                                        this.setState({
                                            image: {
                                                uri: image.uri,
                                                name: 'image.jpg',
                                                type: 'image/jpeg',
                                                url: image.uri,
                                            },
                                        })
                                    })
                                }}>
                                    <Icon name={'image'} style={EditProfileStyle.buttonImage}/>
                                </Button>
                            </Card>
                        </View>
                        <Card style={EditProfileStyle.inputCard}>
                            <Item style={EditProfileStyle.inputItem}>
                                <Input defaultValue={firstName} placeholder={'First Name'}
                                       style={EditProfileStyle.inputText} onChangeText={firstName => this.setState({
                                    firstName
                                })}/>
                            </Item>
                        </Card>
                        <Card style={EditProfileStyle.inputCard}>
                            <Item style={EditProfileStyle.inputItem}>
                                <Input defaultValue={lastName} placeholder={'Sure Name'}
                                       style={EditProfileStyle.inputText} onChangeText={lastName => this.setState({
                                    lastName
                                })}/>
                            </Item>
                        </Card>
                        <Card style={EditProfileStyle.inputCard}>
                            <Item style={EditProfileStyle.inputItem}>
                                <Input defaultValue={email} placeholder={'Email'} style={EditProfileStyle.inputText}
                                       onChangeText={email => this.setState({
                                           email
                                       })}
                                />
                            </Item>
                        </Card>
                        <Card style={EditProfileStyle.inputCard}>
                            <Item style={EditProfileStyle.inputItem}>
                                <Input defaultValue={mobile} placeholder={'Phone Number'}
                                       style={EditProfileStyle.inputText} onChangeText={mobile => this.setState({
                                    mobile
                                })}/>
                            </Item>
                        </Card>
                        <Button style={EditProfileStyle.submitButton} onPress={() => {
                            User.updateUser(firstName, lastName, email, mobile, image).then(() => {

                            })
                        }}>
                            <Text style={EditProfileStyle.buttonText}>
                                Submit
                            </Text>
                        </Button>
                    </ScrollView>
                }
            </View>
        </BackgroundView>
    }
}
