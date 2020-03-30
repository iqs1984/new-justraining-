import {Service} from "../../service/Service";
import {CREATE_MESSAGE, MESSAGE, MESSAGES, TRAINING} from "../../env";

export class MessageModel {

    static getMessages = async () => {
        const data = await Service.sendGet(MESSAGES, {}, {
            notify: false,
            spinner: true
        })
        return data
    }

    static getMessage = async (id) => {
        const data = await Service.sendGet(MESSAGE + id, {}, {
            spinner: true,
            notify: false
        })
        return data
    }
    static createMessage = async (title, description, link, group_ids, image) => {
        const data = await Service.sendPost(CREATE_MESSAGE, {
            title, description, link, group_ids, image
        }, {
            notify: true,
            spinner: true
        })
        return data
    }
}
