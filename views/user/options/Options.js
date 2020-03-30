import * as React from 'react';
import {View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {OptionsStyle} from './options.style';
import {DataCardView} from '../../../components/data-card-view/DataCardView.component';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class Options extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Options',
            headerRight: <NavigationRight/>,
        };
    };

    state = {
        options: [{
            title: 'Payment history',
            image: require('../../../assets/options/pay.png'),
            redirect: 'PaymentHistory',
        },
            {
                title: 'Calculator',
                image: require('../../../assets/options/calculator.png'),
                redirect: 'Calculator',
            },
            {
                title: 'My Group',
                image: require('../../../assets/options/friend.png'),
                redirect: 'MyGroups',
            },
        ],
    };

    render() {
        const {options} = this.state;
        return <BackgroundView>
            <View style={OptionsStyle.container}>
                <ScrollView style={OptionsStyle.scrollView}>
                    {
                        options.map(option => <DataCardView title={option.title} image={option.image}
                                                            redirect={option.redirect}
                                                            navigation={this.props.navigation}/>,
                        )
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
