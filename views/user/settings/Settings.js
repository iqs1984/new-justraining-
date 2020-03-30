import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {DataCardView} from '../../../components/data-card-view/DataCardView.component';
import {SettingsStyle} from './settings.style';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class Settings extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Settings',
            headerRight: <NavigationRight/>,
        };
    };

    state = {
        options: [{
            title: 'Edit profile',
            image: require('../../../assets/settings/edit.png'),
            redirect: 'EditProfile',
        },
            {
                title: 'Change Password',
                image: require('../../../assets/settings/key.png'),
                redirect: 'ChangePassword',
            },
            {
                title: 'Logout',
                image: require('../../../assets/settings/logout.png'),
                redirect: '',
            },
        ],
    };

    render() {
        const {options} = this.state;
        return <BackgroundView>
            <View style={SettingsStyle.container}>
                <ScrollView style={SettingsStyle.scrollView}>
                    {
                        options.map(option => <DataCardView title={option.title} image={option.image}
                                                            redirect={option.redirect}
                                                            navigation={this.props.navigation}/>)
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
