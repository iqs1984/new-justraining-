import * as React from 'react';
import {View, ScrollView, Linking, Image} from 'react-native';
import {ToolsDetailsStyle} from './ToolsDetails.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {DetailCard} from '../../../../components/detail-card/DetailCardView.component';
import {VideoView} from '../../../../components/video-view/VideoView.component';
import {VideoModel} from "../../../../model/video-model/VideoModel";
import {User} from "../../../../model/user-model/UserModel";
import {getDate, replaceWith} from "../../../../App";
import {Button, Card, Text} from "native-base";
import theme from "../../../../styles/theme.style";
import {scale} from "../../../../styles/scale.style";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";
import {DetailCardViewStyle} from "../../../../components/detail-card/DetailCardView.component.style";
import moment from "moment";
import {VideoViewStyle} from "../../../../components/video-view/VideoView.component.style";
import Icon from "react-native-vector-icons/Feather";

export class ToolsDetails extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Tool Detail',
            headerRight: <NavigationRight/>,
        };
    };

    state = {}

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            if (!user.player.is_login) {
                User.logout().then(() => {
                    replaceWith("Login")
                })
            }
        })
        const {id} = this.props.navigation.state.params
        VideoModel.getVideo(id).then(({video, message}) => {
            if (video) {
                this.setState({
                    video
                })
            } else {
                this.setState({
                    message
                })
            }
        })
    }


    render() {
        const {video, message} = this.state
        return <BackgroundView>
            <View style={ToolsDetailsStyle.container}>
                {/*{video && <VideoView data={video}/>}*/}
                <View style={ToolsDetailsStyle.dataContainer}>
                    {video && <ScrollView style={ToolsDetailsStyle.scrollview}>
                        {/*<DetailCard data={video}/>*/}
                        <View style={ToolsDetailsStyle.header}>
                            <View style={ToolsDetailsStyle.image}>
                                <Image resizeMode={"stretch"} source={{
                                    uri: video.image.url
                                }} style={{height: "100%", width: "100%"}}/>
                            </View>
                            <Text style={ToolsDetailsStyle.title}>
                                {video.title}
                            </Text>
                            <Text style={ToolsDetailsStyle.dateTime}>
                                {getDate(video.date_time).format("DD MMM, YYYY hh:mm a")}
                            </Text>
                            <Text style={ToolsDetailsStyle.desc}>
                                {video.description}
                            </Text>
                            <Card style={ToolsDetailsStyle.playButtonContainer}>
                                <Button style={ToolsDetailsStyle.playButton} onPress={() => {
                                    //    props.data.link
                                    Linking.openURL(video.link)
                                }}>
                                    <Icon name={'play'} style={ToolsDetailsStyle.icon}/>
                                </Button>
                            </Card>
                        </View>
                    </ScrollView>

                    }
                </View>
                {
                    message &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: theme.FONT_FAMILY, fontSize: scale(theme.FONT_SIZE_MEDIUM)}}>
                            {message}
                        </Text>
                    </View>
                }
            </View>
        </BackgroundView>
    }

}
