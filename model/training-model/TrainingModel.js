import {Service} from "../../service/Service";
import {CREATE_TRAINING, TRAINING, TRAINING_CONFIRM, TRAININGS, UPDATE_TRAINING} from "../../env";

export class TrainingModel {

    static getTrainings = async () => {
        const data = await Service.sendGet(TRAININGS, {}, {
            spinner: true,
            notify: false
        })
        return data
    }

    static getTraining = async (id) => {
        const data = await Service.sendGet(TRAINING + id, {}, {
            spinner: true,
            notify: false
        })
        return data
    }

    static trainingStatus = async (id, type) => {
        const data = await Service.sendPost(TRAINING_CONFIRM, {
            training_id: id,
            type
        }, {
            spinner: true,
            notify: true
        })
        return data
    }
    static createTraining = async (title, description, link, date_time, group_ids, sport_ids, header_image, image, training_confirm) => {
        const data = await Service.sendPost(CREATE_TRAINING, {
            title, description, link, date_time, group_ids, sport_ids, header_image, image, training_confirm
        }, {
            spinner: true,
            notify: true
        })
        return data
    }
    static updateTraining = async (id, title, description, link, date_time, group_ids, sport_ids, header_image, image, training_confirm) => {
        const data = await Service.sendPost(UPDATE_TRAINING, {
            id, title, description, link, date_time, group_ids, sport_ids, header_image, image, training_confirm
        }, {
            spinner: true,
            notify: true
        })
        return data
    }
}
