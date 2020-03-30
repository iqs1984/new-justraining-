import * as React from 'react';
import Route from './route/Route';
import {NavigationActions} from 'react-navigation';
import {View, ActivityIndicator, Platform} from 'react-native'
import {Root} from 'native-base'
import {Service} from "./service/Service";
import firebase from 'react-native-firebase';
import {useGestureHandlerRef} from "react-navigation-stack";
import {User} from "./model/user-model/UserModel";
import moment from "moment-timezone";

console.disableYellowBox = true;
let navigator;

//redirect from one screen to another
export function redirect(name, params?) {
    navigator.dispatch(NavigationActions.navigate({
        routeName: name,
        params: params,
    }));
}

//replace screen
export function replaceWith(name) {
    navigator.dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [{type: 'Navigate', routeName: name}],
    });
}

export let fcm_token = ""
export default class App extends React.Component {

    state = {
        spinner: false //show spinner true or false
    }

    constructor(props, context) {
        super(props, context);
        User.userTimezone().then(() => {

        })
    }

    componentDidMount(): void {
        //show spinner when call api services
        //return true or false
        Service.show_spinner((status) => {
            this.setState({
                spinner: status
            })
        })

        this.checkPermission();
        this.messageListener();
    }

    checkPermission = async () => {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getFcmToken();
        } else {
            this.requestPermission();
        }
    }

    getFcmToken = async () => {
        const fcmToken = await firebase.messaging().getToken();

        if (fcmToken) {
            console.log("fcmToken");
            console.log(fcmToken);
            fcm_token = fcmToken
            // this.showAlert('Your Firebase Token is:', fcmToken);
            User.userAppRegister(fcmToken).then(() => {

            })
        } else {
            console.log('Failed', 'No token received');
        }
    }

    requestPermission = async () => {
        try {
            const rquest = await firebase.messaging().requestPermission();
            console.log("rquest")
            console.log(rquest)
            this.getFcmToken()
            // User has authorised
        } catch (error) {
            // User has rejected permissions
            console.log("error")
            console.log(error.message)
        }
    }
    messageListener = async () => {
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const {title, body} = notification;
            console.log("1");
            console.log(title, body);
        });
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
            console.log("2");

        });
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const {data} = notificationOpen.notification;
            // redirect('Training', {id: notificationOpen.notification.data.training_id})
            console.log("data")
            const {training_id, message_id, event_id, group_id, video_id} = notificationOpen.notification.data
            if (training_id) {
                redirect('Training', {id: training_id})
            } else if (message_id) {
                redirect("MessageDetails", {id: message_id})
            } else if (event_id) {
                redirect('Event', {id: event_id})
            } else if (group_id) {
                redirect('Chat', {group_id: group_id})
            } else if (video_id) {
                redirect('Tools', {id: video_id})
            }
        });

        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            // redirect('Training', {id: notificationOpen.notification.data.training_id})

            console.log("data")
            const {training_id, message_id, event_id, group_id, video_id} = notificationOpen.notification.data
            if (training_id) {
                redirect('Training', {id: training_id})
            } else if (message_id) {
                redirect("MessageDetails", {id: message_id})
            } else if (event_id) {
                redirect('Event', {id: event_id})
            } else if (group_id) {
                redirect('Chat', {group_id: group_id})
            } else if (video_id) {
                redirect('ToolsDetails', {id: video_id})
            }
        }

        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log("5");

            console.log(JSON.stringify(message));
        });
    }

    render() {
        const {spinner} = this.state
        return <Root>
            <Route ref={router => navigator = router}/>
            {spinner &&
            <ActivityIndicator size={'large'}
                               style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}/>}
        </Root>

    }
}
export const getDate = date => {
    return moment.utc(date).tz(moment.tz.guess())
}
