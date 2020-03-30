import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Splash} from '../views/splash/Splash';
import {Home} from '../views/user/home/Home';
import {MyTrainings} from '../views/user/my-trainings/MyTrainings';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../styles/theme.style';
import {scale} from '../styles/scale.style';
import {Training} from '../views/user/training/Training';
import {Events} from '../views/user/events/Events';
import {Event} from '../views/user/event/Event';
import {Coupons} from '../views/user/coupon/Coupons';
import {Options} from '../views/user/options/Options';
import {Settings} from '../views/user/settings/Settings';
import {Messages} from '../views/user/messages/Messages';
import {PaymentHistory} from '../views/user/options/payment-history/PaymentHistory';
import {MyGroups} from '../views/user/options/my-groups/MyGroups';
import {EditProfile} from '../views/user/settings/edit-profile/EditProfile';
import {ChangePassword} from '../views/user/settings/change-password/ChangePassword';
import {Tools} from '../views/user/tools/Tools';
import {ToolsDetails} from '../views/user/tools/tool-detail/ToolsDetails';
import {MessageDetails} from '../views/user/messages/message-detail/MessageDetails';
import {ChatList} from '../views/chat/chat-list/ChatList';
import {Chat} from '../views/chat/chat-list/Chat/Chat';
import {AdminHome} from '../views/admin/admin-home/AdminHome';
import {CreateMessage} from '../views/admin/admin-home/create-message/CreateMessage';
import {CreateTraining} from '../views/admin/admin-home/create-training/CreateTraining';
import {Calculator} from '../views/calc/Calculator';
import {MemberList} from '../views/member-list/MemberList';
import {Login} from '../views/login/Login';
import {Registration} from '../views/registration/Registration';
import {PasswordRecover} from '../views/password-recover/PasswordRecover';
import {Platform} from "react-native";

const Route = createAppContainer(createStackNavigator({
    Splash,
    Home,
    MyTrainings,
    Training,
    Events,
    Event,
    Coupons,
    Options,
    Settings,
    Messages,
    PaymentHistory,
    MyGroups,
    EditProfile,
    ChangePassword,
    Tools,
    ToolsDetails,
    MessageDetails,
    ChatList,
    Chat,
    AdminHome,
    CreateMessage,
    CreateTraining,
    Calculator,
    MemberList,
    Login,
    Registration,
    PasswordRecover
}, {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerBackImage: <Icon name={'chevron-left'}
                               style={{color: theme.SECONDARY_COLOR, fontSize: scale(theme.FONT_SIZE_EXTRA_LARGE)}}/>,
        headerTitleStyle: {
            fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
            fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
            fontSize: scale(theme.FONT_SIZE_MEDIUM),
            color: theme.SECONDARY_COLOR
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: theme.NAVIGATION_BAR
        }
    },
}));

export default Route;
