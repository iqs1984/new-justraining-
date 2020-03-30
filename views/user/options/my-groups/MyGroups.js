import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {MyGroupsStyle} from './MyGroups.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {MyGroupCardView} from '../../../../components/my-group-card/MyGroupCardView.component';
import {User} from "../../../../model/user-model/UserModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

export class MyGroups extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'My Groups',
            headerRight: <NavigationRight/>,
        };
    };

    state = {}

    componentDidMount(): void {
        User.getGroups().then(({groups}) => {
            this.setState({
                groups
            })
        })
    }

    render() {
        const {groups = []} = this.state
        return <BackgroundView>
            <View style={MyGroupsStyle.container}>
                <ScrollView style={MyGroupsStyle.scrollView}>
                    {groups.map(group => <MyGroupCardView data={group}/>)}
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
