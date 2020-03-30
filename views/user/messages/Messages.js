import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {MessagesStyle} from './messages.style';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {MessageCardView} from '../../../components/message-card/MessageCardView.component';
import {MessageModel} from "../../../model/message-model/MessageModel";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class Messages extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Messages',
            headerRight: <NavigationRight/>,
        };
    };

    componentDidMount(): void {
        MessageModel.getMessages().then(({messages}) => {
            // alert(JSON.stringify(messages))
            this.setState({
                messages
            })
        })
    }

    state = {}

    render() {
        const {messages = []} = this.state
        return <BackgroundView>
            <View style={MessagesStyle.container}>
                <ScrollView style={MessagesStyle.scrollView}>
                    {messages.map(message => <MessageCardView message={message} navigation={this.props.navigation}
                                                              redirect={'MessageDetails'}/>)}
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
