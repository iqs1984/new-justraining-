import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationRight} from '../../components/navigation/navigation-right/NavigationRight.component';
import {MemberCard} from '../../components/member-card/MemberCard.component';
import {TrainingModel} from "../../model/training-model/TrainingModel";
import {Service} from "../../service/Service";
import {User} from "../../model/user-model/UserModel";
import {BackgroundView} from "../../components/background-view/BackgroundView.component";

export class MemberList extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Member list',
            headerRight: NavigationRight,
        };
    };

    componentDidMount(): void {
        this.getList(this.props.navigation.getParam("data_type"), this.props.navigation.getParam("type_id"), this.props.navigation.getParam("id"))
    }

    getList = (post, type, id) => {
        User.memberList(post, type, id).then(({member_list}) => {
            this.setState({
                member_list
            })
        })
    }
    state = {}


    render() {
        const {member_list} = this.state
        const type_id = this.props.navigation.getParam("type_id")
        return <BackgroundView>
            <View>
                <ScrollView>
                    {type_id === 1 && member_list && member_list.confirmed_players.map(member => <MemberCard
                        data={member} member_list={member_list}/>)}
                    {type_id === 2 && member_list && member_list.unconfirmed_players.map(member => <MemberCard
                        data={member} member_list={member_list}/>)}
                    {type_id === 3 && member_list && member_list.do_not_confirmed_players.map(member => <MemberCard
                        data={member} member_list={member_list}/>)}
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
