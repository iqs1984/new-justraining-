import {Service} from "../../service/Service";
import {
    APP_REGISTER,
    CHANGE_PASSWORD,
    CREATE_PLAYER,
    GET_SPORTS,
    LOGIN,
    LOGOUT,
    MEMBER_LIST,
    MY_GROUPS, PASSWORD_RECOVER,
    PROFILE_UPDATE, UPDATE_TIMEZONE,
    USER
} from "../../env";

import {Platform} from 'react-native'
import moment from "moment-timezone";

export class User {

    static login = async (username, password) => {
        const data = await Service.sendPost(LOGIN, {username, password}, {
            spinner: true,
            notify: true
        })
        return data
    }

    static logout = async () => {
        const data = await Service.sendPost(LOGOUT, {}, {
            spinner: true,
            notify: true
        })
        return data
    }

    static getUser = async () => {
        const data = await Service.sendGet(USER, {}, {
            spinner: true,
            notify: false
        })
        return data
    }
    static  createUser = async (username, email, password, name) => {
        const data = await Service.sendPost(CREATE_PLAYER, {
            username,
            email,
            password,
            name
        }, {
            spinner: true,
            notify: true
        })
        return data
    }

    static updateUser = async (fname, lname, email, mobile, image) => {
        const data = await Service.sendPost(PROFILE_UPDATE, {fname, lname, email, mobile, image}, {
            spinner: true,
            notify: true
        })
        return data
    }

    static getGroups = async () => {
        const data = await Service.sendGet(MY_GROUPS, {}, {
            spinner: true,
            notify: false
        })
        return data
    }

    static getSports = async () => {
        const data = await Service.sendGet(GET_SPORTS, {}, {
            spinner: true,
            notify: false
        })
        return data
    }

    static changePassword = async (password, new_password, confirm_password) => {
        const data = await Service.sendPost(CHANGE_PASSWORD, {
            password, new_password, confirm_password
        }, {
            notify: true,
            spinner: true
        })
        return data
    }

    static memberList = async (post, type, id) => {
        const data = await Service.sendGet(MEMBER_LIST, {
            post, type, id
        }, {
            notify: false,
            spinner: true
        })
        return data
    }

    static userAppRegister = async (fcmToken) => {
        const data = await Service.sendPost(APP_REGISTER, {
            firebase_token: fcmToken,
            platform: Platform.OS.toLowerCase()
        }, {
            notify: false,
            spinner: true
        })
        return data
    }

    static recoverPassword = async (username) => {
        const data = await Service.sendPost(PASSWORD_RECOVER, {
            username
        }, {
            notify: true,
            spinner: true
        })
        return data
    }

    static userTimezone = async () => {
        const data = await Service.sendPost(UPDATE_TIMEZONE, {
            timezone: moment.tz.guess()
        }, {
            notify: true,
            spinner: true
        })
        return data
    }
}
