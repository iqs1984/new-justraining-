import * as React from 'react';
import {View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {DataCardView} from '../../../../components/data-card-view/DataCardView.component';
import {PaymentHistoryStyle} from './paymentHistory.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {PaymentModel} from "../../../../model/payment-model/PaymentModel";
import moment from "moment";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";
import {getDate} from "../../../../App";

export class PaymentHistory extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Payment History',
            headerRight: <NavigationRight/>,
        };
    };

    componentDidMount(): void {
        PaymentModel.getPayment().then(({payments}) => {
            this.setState({payments})
        })
    }

    state = {}

    render() {
        const {payments = []} = this.state
        return <BackgroundView>
            <View style={PaymentHistoryStyle.container}>
                <ScrollView style={PaymentHistoryStyle.scrollView}>
                    {
                        payments.map(payment => <DataCardView
                            title={getDate(payment.date).format("MMM DD, YYYY hh:mm a")}
                            showRighIcon={false} navigation={this.props.navigation}
                            redirect={"Payments"}/>)
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
