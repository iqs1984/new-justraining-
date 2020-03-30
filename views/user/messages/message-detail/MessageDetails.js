import * as React from 'react';
import {View, ScrollView, Modal} from 'react-native';
import {MessageDetailsStyle} from './MessageDetails.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {DetailCard} from '../../../../components/detail-card/DetailCardView.component';
import {VideoView} from '../../../../components/video-view/VideoView.component';
import {MessageModel} from "../../../../model/message-model/MessageModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";
import ImageViewer from "react-native-image-zoom-viewer";
import {Button, Card} from "native-base";
import Icon from "react-native-vector-icons/Feather";
import theme from "../../../../styles/theme.style";

export class MessageDetails extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Message Detail',
            headerRight: <NavigationRight/>,
        };
    };
    state = {visible: false}

    componentDidMount(): void {
        const {id} = this.props.navigation.state.params
        MessageModel.getMessage(id).then(({message_model}) => {
            this.setState({
                'message': message_model
            })
        })
    }

    isVisible = () => {
        this.setState({
            visible: true
        })
    }

    render() {
        const {message, visible} = this.state
        return <BackgroundView>
            <View style={MessageDetailsStyle.container}>
                {/*{message && <VideoView data={message}/>}*/}
                <View style={MessageDetailsStyle.dataContainer}>
                    <ScrollView style={MessageDetailsStyle.scrollview}>
                        {message &&
                        <DetailCard type={"message"} data={message} isVisible={this.isVisible}/>}
                    </ScrollView>
                </View>
            </View>
            <Modal visible={this.state.visible} transparent={true} onRequestClose={() => this.setState({
                visible: false
            })}>
                {message && message.image && <ImageViewer imageUrls={[
                    {
                        url: message.image.url
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
