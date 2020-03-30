import {Service} from "../../service/Service";
import {CHAT_GROUPS, SEND_NOTIFICATION} from "../../env";

export class ChatModel {

    static getGroupList = async () => {
        const data = await Service.sendGet(CHAT_GROUPS, {}, {
            notify: false,
            spinner: true
        })
        return data
    }

    static sendChatNotification = async (group_id, text, user) => {
        let data = await Service.sendPost(SEND_NOTIFICATION, {group_id, text, user}, {
            notify: false,
            spinner: false
        })
    }
}
