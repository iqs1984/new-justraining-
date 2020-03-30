import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Text, Button} from 'native-base';
import {BackgroundView} from '../../../components/background-view/BackgroundView.component';
import {AdminHomeStyle} from './adminHome.style';
import {TilesContainer} from '../../../components/home/home-tiles-container/TilesContainer.component';
import Icon from 'react-native-vector-icons/Feather';
import {User} from "../../../model/user-model/UserModel";
import {replaceWith} from "../../../App";

export class AdminHome extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };


    state = {
        menuLink: [
            {
                id: 1,
                icon: require('../../../assets/home/chat/message.png'),
                title: 'Chat',
                redirect: 'ChatList',
            },
            {
                id: 2,
                icon: require('../../../assets/home/training/gymnast.png'),
                title: 'My Training',
                redirect: 'MyTrainings',
            },
            {
                id: 3,
                icon: require('../../../assets/home/cals/calculator.png'),
                title: 'Calculator',
                redirect: 'Calculator',
            },
            {
                id: 4,
                icon: require('../../../assets/home/mail/mail.png'),
                title: 'Create Messages',
                redirect: 'CreateMessage',
            }
        ],
    };

    render() {
        const {menuLink} = this.state;
        return <SafeAreaView style={AdminHomeStyle.safeAreaView} forceInset={{top: "never", bottom: 'never'}}>
            <BackgroundView>
                <ScrollView style={AdminHomeStyle.container}
                            contentContainerStyle={AdminHomeStyle.contentContainerStyle}>
                    <View style={AdminHomeStyle.userImageContainer}>
                        <Image resizeMode={"stretch"} source={require('../../../assets/logo/logo-black.png')}
                               style={AdminHomeStyle.userImage}
                        />
                    </View>
                    <TilesContainer menuLink={menuLink} navigation={this.props.navigation}/>
                    <Button style={AdminHomeStyle.logoutButton} onPress={() => {
                        User.logout().then(() => {
                            replaceWith("Login")
                        })
                    }}>
                        <View style={AdminHomeStyle.freeSpace}/>
                        <Text style={AdminHomeStyle.logoutText}>
                            LOGOUT
                        </Text>
                        <View style={AdminHomeStyle.freeSpace}/>
                        <Icon name={'log-out'} style={AdminHomeStyle.logoutIcon}/>
                    </Button>
                </ScrollView>
            </BackgroundView>
        </SafeAreaView>;
    }
}
