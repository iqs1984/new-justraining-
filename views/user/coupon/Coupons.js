import * as React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {CouponStyle} from './coupons.style';
import {CouponView} from '../../../components/coupons/CouponsCardView.component';
import {Coupon} from "../../../model/coupon-model/CouponModel";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";
import {CouponDetail} from "./CouponDetail";

export class Coupons extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Partners',
            headerRight: NavigationRight,
        };
    };
    state = {data: {}, showDetail: false}

    componentDidMount(): void {
        Coupon.getCoupon().then(({coupon}) => {
            // alert(JSON.stringify(coupon))
            this.setState({
                coupon
            })
        })
    }

    render() {
        const {coupon = [], showDetail} = this.state
        return <BackgroundView>
            <View style={CouponStyle.container}>
                <ScrollView style={CouponStyle.scrollView}>
                    {coupon.map(coupon => <CouponView data={coupon} onSelect={(data) => {
                        this.setState({
                            showDetail: true,
                            data
                        })
                    }}/>)}
                </ScrollView>
            </View>
            <CouponDetail close={() => {
                this.setState({
                    showDetail: false
                })
            }} visible={showDetail} data={this.state.data}/>
        </BackgroundView>
    }
}
