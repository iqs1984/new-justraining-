import {Service} from "../../service/Service";
import {COUPONS} from "../../env";

export class Coupon {

    static getCoupon = async () => {
        const data = await Service.sendGet(COUPONS, {}, {
            notify: false,
            spinner: true
        })
        return data
    }
}
