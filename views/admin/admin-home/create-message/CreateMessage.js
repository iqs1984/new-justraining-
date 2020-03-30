import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {CreateMessageStyle} from './CreateMessage.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {Card, Input, Item, Button, Text} from 'native-base';
import {EditProfileStyle} from '../../../user/settings/edit-profile/editProfile.style';
import Icon from 'react-native-vector-icons/Feather';
import MultiSelect from 'react-native-multiple-select';
import {scale} from '../../../../styles/scale.style';
import {PickImage} from "../../../../model/PickImage-model/PickImage";
import {User} from "../../../../model/user-model/UserModel";
import {MessageModel} from "../../../../model/message-model/MessageModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

export class CreateMessage extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Create Message',
            headerRight: NavigationRight,
        };
    };

    state = {
        selectedItems: [],
    };

    componentDidMount(): void {
        User.getGroups().then(({groups}) => {
            this.setState({
                groups
            })
        })
    }

    render() {
        const {selectedItems, image, groups, title, description, link} = this.state;
        return  <BackgroundView>
            <View style={CreateMessageStyle.container}>
            <ScrollView style={CreateMessageStyle.scrollview}>
                <Card style={CreateMessageStyle.inputCard}>
                    <Item style={CreateMessageStyle.inputItem}>
                        <Input placeholder={'Title'} style={CreateMessageStyle.inputText}
                               onChangeText={title => this.setState({
                                   title
                               })}/>
                    </Item>
                </Card>
                <Card style={CreateMessageStyle.inputCard}>
                    <Item style={CreateMessageStyle.inputItem}>
                        <Input multiline placeholder={'Message'} style={CreateMessageStyle.inputText}
                               onChangeText={description => this.setState({
                                   description
                               })}/>
                    </Item>
                </Card>
                <Card style={CreateMessageStyle.inputCard}>
                    <Item style={CreateMessageStyle.inputItem}>
                        <Input placeholder={'Link'} style={CreateMessageStyle.inputText}
                               onChangeText={link => this.setState({
                                   link
                               })}/>
                    </Item>
                </Card>
                <Card style={CreateMessageStyle.inputCard}>
                    <MultiSelect
                        styleMainWrapper={CreateMessageStyle.multiSelectMainWrapper}
                        styleTextDropdown={CreateMessageStyle.selectText}
                        styleDropdownMenuSubsection={CreateMessageStyle.styleDropdownMenuSubsection}
                        // hideTags
                        items={groups}
                        uniqueKey="id"
                        ref={(component) => {
                            this.multiSelect = component;
                        }}
                        onSelectedItemsChange={(selectedItems) => {
                            this.setState({
                                selectedItems,
                            });
                        }}
                        selectedItems={selectedItems}
                        selectText="Select Group"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={(text) => console.log(text)}
                        // altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{color: '#CCC'}}
                        submitButtonColor="#CCC"
                        submitButtonText="Submit"
                    />
                </Card>
                {
                    image && <Card>
                        <Image style={{width: "100%", height: scale(200)}}
                               source={
                                   {
                                       uri: image.uri
                                   }
                               }/>
                    </Card>
                }
                <Card style={CreateMessageStyle.inputCard}>
                    <Button style={CreateMessageStyle.addImageButton} onPress={() => {
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
                        <Icon name={'image'} style={CreateMessageStyle.addImageButtonImage}/>
                        <View style={CreateMessageStyle.freeSpace}/>
                        <Text style={CreateMessageStyle.addImageButtonText}>
                            {image ? "Update Image" : "Add Image"}
                        </Text>
                        <View style={CreateMessageStyle.freeSpace}/>
                    </Button>
                </Card>
                <Button style={CreateMessageStyle.sendButton} onPress={() => {
                    MessageModel.createMessage(title, description, link, selectedItems, image).then(() => {
                        // this.setState({
                        //     title: "",
                        //     description: "",
                        //     link: "",
                        //     selectedItems: [],
                        //     image: ""
                        // })
                        this.props.navigation.goBack()
                    })
                }}>
                    <Text style={CreateMessageStyle.sendButtonText}>
                        SEND
                    </Text>
                </Button>
            </ScrollView>
        </View>
        </BackgroundView>
    }
}
