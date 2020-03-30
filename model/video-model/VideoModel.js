import {Service} from "../../service/Service";
import {TRAINING, VIDEO, VIDEOS} from "../../env";

export class VideoModel {
    static getMessages = async () => {
        const data = await Service.sendGet(VIDEOS, {}, {
            spinner: true,
            notify: false
        })
        return data
    }
    static getVideo = async (id) => {
        const data = await Service.sendGet(VIDEO + id, {}, {
            spinner: true,
            notify: false
        })
        return data
    }

}
