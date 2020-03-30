import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {ChatListStyle} from './ChatList.style';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {ChatCardView} from '../../../components/chat-card-view/ChatCardView';
import {ChatModel} from "../../../model/chat-model/ChatModel";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class ChatList extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Group Chat',
            headerRight: <NavigationRight/>,
        };
    };
    state = {}

    componentDidMount(): void {
        ChatModel.getGroupList().then(({groups}) => {
            this.setState({
                groups
            })
        })
    }

    render() {
        const {groups = []} = this.state
        return <BackgroundView>
            <View style={ChatListStyle.container}>
                <ScrollView style={ChatListStyle.scrollview}>
                    {
                        groups.map(group => <ChatCardView data={group} navigation={this.props.navigation}
                                                          redirect={'Chat'}/>)
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
