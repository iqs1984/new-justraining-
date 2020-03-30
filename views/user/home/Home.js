import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Text} from 'native-base';
import {BackgroundView} from '../../../components/background-view/BackgroundView.component';
import {HomeStyle} from './home.style';
import {TilesContainer} from '../../../components/home/home-tiles-container/TilesContainer.component';
import {User} from "../../../model/user-model/UserModel";
import {NavigationEvents} from "react-navigation";
import {replaceWith} from "../../../App";
import {scale} from "../../../styles/scale.style";

export class Home extends React.Component {

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
                icon: require('../../../assets/home/event/calendar.png'),
                title: 'Events',
                redirect: 'Events',
            },
            {
                id: 4,
                icon: require('../../../assets/home/mail/mail.png'),
                title: 'Messages',
                redirect: 'Messages',
            },
            {
                id: 5,
                icon: require('../../../assets/home/coupon/coupon.png'),
                title: 'Partners',
                redirect: 'Coupons',
            },
            {
                id: 6,
                icon: require('../../../assets/home/tools/wrench.png'),
                title: 'Tools',
                redirect: 'Tools',
            },
            {
                id: 7,
                icon: require('../../../assets/home/option/list.png'),
                title: 'Options',
                redirect: 'Options',
            },
            {
                id: 8,
                icon: require('../../../assets/home/settings/settings.png'),
                title: 'Settings',
                redirect: 'Settings',
            },
        ],
    };

    getProfile = () => {
        User.getUser().then(({user}) => {
            // alert(JSON.stringify(user))
            this.setState({
                user
            })
        })
    }

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            if (!user.player.is_login) {
                User.logout()
            }
        })
    }

    render() {
        const {menuLink, user} = this.state;
        return <SafeAreaView style={HomeStyle.safeAreaView} forceInset={{top: "never", bottom: 'never'}}>
            <NavigationEvents onWillFocus={() => {
                User.getUser().then(({user}) => {
                    if (!user.player.is_login) {
                        User.logout().then(() => {
                            replaceWith("Login")
                        })
                    }
                })
                this.getProfile()
            }}/>
            <BackgroundView>
                {
                    user &&
                    <ScrollView style={HomeStyle.container} contentContainerStyle={HomeStyle.contentContainerStyle}>
                        {/*<View style={{height: scale(100)}}/>*/}
                        <View style={HomeStyle.userImageContainer}>
                            <Image source={
                                {
                                    uri: user.player.image.url
                                }
                            }
                                   style={HomeStyle.userImage}
                            />
                        </View>
                        <Text style={HomeStyle.userName}>
                            {user.username}
                        </Text>
                        <TilesContainer menuLink={menuLink} navigation={this.props.navigation}/>
                        {/*<View style={{height: scale(100)}}/>*/}
                    </ScrollView>
                }
            </BackgroundView>
        </SafeAreaView>;
    }
}
