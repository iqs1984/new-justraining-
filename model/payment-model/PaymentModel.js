import {Service} from "../../service/Service";
import {PAYMENTS} from "../../env";

export class PaymentModel {

    static getPayment = async () => {
        const data = await Service.sendGet(PAYMENTS, {}, {
            notify: false,
            spinner: true
        })
        return data
    }
}
