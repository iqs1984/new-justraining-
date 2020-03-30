import * as React from 'react';
import {View, ScrollView, Image, Linking, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import {Card, Text, Button} from 'native-base';
import {ImageCardView} from '../../../components/image-card-view/ImageCardView.component';
import {CardViewStyle} from '../../../components/card-view/CardView.component.style';
import {StatusCardView} from '../../../components/status-card-view/StatusCardView.component';
import {scale} from '../../../styles/scale.style';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {EventStyle} from './Event.style';
import {EventModel} from "../../../model/event-model/EventModel";
import {TrainingStyle} from "../training/Training.style";
import {TrainingModel} from "../../../model/training-model/TrainingModel";
import {User} from "../../../model/user-model/UserModel";
import {replaceWith} from "../../../App";
import theme from "../../../styles/theme.style";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";
import ImageViewer from "react-native-image-zoom-viewer";
import Icon from "react-native-vector-icons/Feather";

export class Event extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Events Detail',
            headerRight: <NavigationRight/>,
        };
    };

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            if (!user.player.is_login) {
                User.logout().then(() => {
                    replaceWith("Login")
                })
            }
        })
        this.getEvent()
    }

    getEvent = () => {
        const {id} = this.props.navigation.state.params
        EventModel.getEvent(id).then(({event, message}) => {
            if (event) {
                this.setState({
                    event
                })
            } else {
                this.setState({
                    message
                })
            }
        })
    }

    state = {
        visible: false
    }

    render() {
        const {event, message} = this.state
        return <BackgroundView>
            <ScrollView style={EventStyle.scrollView}>
                {event && <Card>
                    <ImageCardView data={event}/>
                    <View style={EventStyle.container}>
                        <View style={EventStyle.subCardRow}>
                            <StatusCardView
                                data_type={"event"}
                                title={'Confirmed Players'} count={event.confirmed_players_count}
                                id={event.id}
                                navigation={this.props.navigation}
                                type={"Confirmed Players"}
                                type_id={1}
                            />
                            <StatusCardView
                                data_type={"event"}
                                title={'Unconfirmed Players'} count={event.unconfirmed_players_count}
                                id={event.id}
                                navigation={this.props.navigation}
                                type={"Unconfirmed Players"}
                                type_id={2}
                            />
                            <View style={{width: 8}}/>
                            <StatusCardView
                                data_type={"event"}
                                title={'Don\'t Go Players'} count={event.do_not_confirmed_players_count}
                                id={event.id}
                                navigation={this.props.navigation}
                                type={'Don\'t Go Players'}
                                type_id={3}
                            />
                        </View>
                        <Text style={EventStyle.description}>
                            {event.description}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(event.link)
                        }}>
                            <Text style={{
                                color: "blue",
                                textDecorationLine: "underline",
                                marginBottom: scale(8)
                            }}>
                                {event.link}
                            </Text>
                        </TouchableOpacity>
                        {event.image.exists && <TouchableWithoutFeedback onPress={() => {

                            this.setState({
                                visible: true
                            })

                        }}><Image style={TrainingStyle.image} source={{
                            uri: event.image.url
                        }}/></TouchableWithoutFeedback>}
                        {!event.is_confirmed && event.pivot.is_confirmed !== 2 && <View style={EventStyle.row}>
                            <Button style={EventStyle.confirmed} onPress={() => {
                                EventModel.eventStatus(event.id, null).then((data) => {
                                    // this.setState({
                                    //     'event.is_confirmed': true
                                    // })
                                    this.getEvent()
                                })
                            }}>
                                <Text style={EventStyle.buttonText}>
                                    CONFIRM
                                </Text>
                            </Button>
                            <View style={{width: scale(16)}}/>
                            <Button style={EventStyle.dontGo} onPress={() => {
                                EventModel.eventStatus(event.id, "not_confirmed").then((data) => {
                                    // this.setState({
                                    //     'event.is_confirmed': 2
                                    // })
                                    this.getEvent()
                                })
                            }}>
                                <Text style={EventStyle.buttonText}>
                                    DON'T GO
                                </Text>
                            </Button>
                        </View>}
                    </View>
                </Card>}
                {
                    message &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: theme.FONT_FAMILY, fontSize: scale(theme.FONT_SIZE_MEDIUM)}}>
                            {message}
                        </Text>
                    </View>
                }
            </ScrollView>
            <Modal visible={this.state.visible} transparent={true} onRequestClose={() => this.setState({
                visible: false
            })}>
                {event && event.image && <ImageViewer imageUrls={[
                    {
                        url: event.image.url
                    }
                ]}/>}
                <Button onPress={() => this.setState({
                    visible: false
                })} transparent style={{position: 'absolute', top: 50, right: 20}}>
                    <Icon style={{
                        color: "white",
                        fontSize: theme.FONT_SIZE_LARGE
                    }} name={"x"}/>
                </Button>
            </Modal>
        </BackgroundView>
    }
}
