import * as React from 'react';
import {
    View,
    ScrollView,
    EmitterSubscription,
    Keyboard,
    FlatList
} from 'react-native';
import Fire from '../../../../Fire';
import {ChatStyle} from './Chat.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {ChatCard} from '../../../../components/chat-card/ChatCard.component';
import {Item, Input, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {User} from "../../../../model/user-model/UserModel";
import moment from "moment";
import {scale} from "../../../../styles/scale.style";
import {ChatModel} from "../../../../model/chat-model/ChatModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

const fire = new Fire()

export class Chat extends React.Component {
    keyboardListener: EmitterSubscription
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("group_name"),
            headerRight: NavigationRight,
        };
    };

    componentDidMount(): void {
    }

    state = {
        messages: [],
        text: "",
        group_id: this.props.navigation.getParam("group_id")
    }

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            _id: fire.uid,
        };
    }

    componentDidMount() {
        // $crud.update("chat-room/read-chatroom-message", {
        //     chat_room_id: parseInt(this.props.navigation.getParam("group_id"))
        // }, {
        //     showProgress: false,
        //     notify: false
        // })
        User.getUser().then((({user}) => {
            this.setState({
                user: user.username,
                group_id: parseInt(this.props.navigation.getParam("group_id"))
            }, () => {
                this.props.navigation.setParams({
                    name: user.username
                })
                fire.on(parseInt(this.props.navigation.getParam("group_id")), message =>
                    this.setState(previousState => ({
                        messages: [...this.state.messages, message],
                    }))
                );
            })
        }))

        Platform.select({
            ios: () => {
                Keyboard.addListener("keyboardDidShow", ({startCoordinates: {height}}) => {
                    this.setState({keyboard: height + 80})
                })
                Keyboard.addListener("keyboardWillHide", () => this.setState({keyboard: false}))
            },
            android: () => {
            }
        })()

    }

    componentWillUnmount() {
        fire.off();
    }

    render() {
        const {messages, text, group_id} = this.state
        // alert(JSON.stringify(messages))
        return <BackgroundView>
            <View style={ChatStyle.container}>
                <View style={ChatStyle.scrollview}>
                    <FlatList
                        // @ts-ignore
                        ref={ref => this.flatList = ref}
                        // @ts-ignore
                        onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                        // @ts-ignore
                        onLayout={() => this.flatList.scrollToEnd({animated: true})}
                        initialNumToRender={1}
                        style={{flex: 1}}
                        data={messages}
                        renderItem={({item, index, separators}) => (
                            // item.group_id === group_id &&
                            <ChatCard right={item.user.name !== this.props.navigation.state.params.name}
                                      left={item.user.name === this.props.navigation.state.params.name}
                                      sender={item.user.name}
                                      message={item.text} date_time={moment(item.timestamp).fromNow()}/>
                        )}
                    />
                </View>
                <View style={ChatStyle.footer}>
                    <Item regular style={ChatStyle.item}>
                        <Input multiline style={ChatStyle.messageText} placeholder={'Enter your message here'}
                               value={text}
                               onChangeText={text => this.setState({
                                   text
                               })}
                        />
                    </Item>
                    <Button style={ChatStyle.sendButton} onPress={() => {
                        if (text) {
                            fire.send([{
                                text,
                                user: this.user,
                                group_id: group_id
                            }])
                            this.setState({
                                text: ""
                            })
                            ChatModel.sendChatNotification(group_id, text, this.user.name).then(() => {

                            })
                        }
                    }}>
                        <Icon name={'send'} style={ChatStyle.icon}/>
                    </Button>
                </View>
                {/*{*/}
                {/*    this.state.keyboard &&*/}
                {/*    <View style={{height: this.state.keyboard}}/>*/}
                {/*}*/}
            </View>
        </BackgroundView>
    }
}
