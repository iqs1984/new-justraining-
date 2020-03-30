import {Service} from "../../service/Service";
import {EVENT, EVENT_CONFIRM, EVENTS, TRAINING, TRAINING_CONFIRM} from "../../env";

export class EventModel {


    static getEvents = async () => {
        const data = await Service.sendGet(EVENTS, {},{
            notify: false,
            spinner: true
        })
        return data
    }

    static getEvent = async (id) => {
        const data = await Service.sendGet(EVENT + id, {},{
            spinner: true,
            notify: false
        })
        return data
    }
    static eventStatus = async (id, type) => {
        const data = await Service.sendPost(EVENT_CONFIRM, {
            event_id: id,
            type
        }, {
            spinner: true,
            notify: true
        })
        return data
    }

}
