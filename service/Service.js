import {ACCESS_TOKEN, BASE_URL} from "../env";
import {Toast} from 'native-base'
import AsyncStorage from "@react-native-community/async-storage";

export class Service {

    static  status = false
    static callback_ref;
    static show_spinner = (callback) => {
        Service.callback_ref = callback
        callback(Service.status)
    }

    static async sendPost(url: String, data: Object, options = {notify: false, spinner: true}) {
        const value = await AsyncStorage.getItem("@token");
        const token = JSON.parse(value);
        this.callback_ref(options.spinner)
        console.log(JSON.stringify(data))
        const formData = new FormData()
        Object.keys(data).map(key => {
            if (Array.isArray(data[key])) {
                data[key].map(data => {
                    formData.append(key + "[]", data)
                })
            } else {
                formData.append(key, data[key])
            }
        })
        // formData.append("token", token)
        formData.append("access_token", ACCESS_TOKEN)
        console.log("::My Form Data is::")
        console.log(JSON.stringify(formData))
        console.log("::With url::")
        console.log(BASE_URL + url)
        console.log("token")
        console.log(token)
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                },
                body: formData,
                credentials: "include"
            }).then(response => {
                this.callback_ref(false)
                response.json().then(
                    response_json => {
                        options.notify && Toast.show({
                            text: response_json.message,
                            buttonText: "Hide"
                        })
                        if (response_json.type === "success")
                            resolve(response_json)
                    }
                )
            }).catch(e => {
                this.callback_ref(false)
                Toast.show({
                    text: e.message,
                    buttonText: "Hide"
                })
            })
        })
    }

    static sendGet(url: String, data: Object, options = {notify: false, spinner: true}) {
        this.callback_ref && this.callback_ref(options.spinner)
        const esc = encodeURIComponent;
        const query = Object.keys(data)
            .map(k => esc(k) + '=' + esc(data[k]))
            .join('&');
        return new Promise((resolve, reject) => {
            fetch(data ? BASE_URL + url + query : BASE_URL + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            }).then(response => {
                this.callback_ref && this.callback_ref(false)
                response.json().then(
                    response_json => {
                        options.notify && Toast.show({
                            text: response_json.message,
                            buttonText: "Hide"
                        })
                        resolve(response_json)
                    }
                )
            }).catch(e => {
                this.callback_ref && this.callback_ref(false)
                Toast.show({
                    text: e.message,
                    buttonText: "Hide"
                })
            })
        })
    }
}
