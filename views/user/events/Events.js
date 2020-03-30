import * as React from 'react';
import {View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {CalendarView} from '../../../components/my-training/calender-view/CalendarView.component';
import {Text, Card} from 'native-base';
import {CardView} from '../../../components/card-view/CardView.component';
import {EventsStyle} from './events.style';
import Icon from 'react-native-vector-icons/Feather';
import MonthSelectorCalendar from 'react-native-month-selector';
import moment from 'moment';
import {EventModel} from "../../../model/event-model/EventModel"
import theme from "../../../styles/theme.style";
import {scale} from "../../../styles/scale.style";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class Events extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Events',
            headerRight: <NavigationRight/>,
        };
    };
    state = {
        showMonth: false,
        selectedDate: moment()
    };

    componentDidMount(): void {
        EventModel.getEvents().then(({events, message}) => {
            // alert(JSON.stringify(events))
            if (events) {
                this.setState({
                    events
                })
            } else {
                this.setState({
                    message
                })
            }
        })
    }

    render() {
        const {selectedDate, showMonth, events = [], changeDate, message} = this.state;
        return <BackgroundView>
            <View style={EventsStyle.container}>
                <View style={EventsStyle.dateViewContainer}>
                    <Card>
                        <TouchableWithoutFeedback onPress={() => {
                            this.setState({
                                showMonth: !this.state.showMonth,
                            });
                        }}>
                            <View style={EventsStyle.monthContainer}>
                                <Text style={EventsStyle.monthText}>
                                    {`${selectedDate ? moment(selectedDate).format('MMM, YYYY') : moment().format('MMM, YYYY')}   `}
                                    <Icon name={showMonth ? 'chevron-up' : 'chevron-down'} style={EventsStyle.icon}/>
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        {showMonth && <MonthSelectorCalendar
                            currentMonthTextStyle={
                                {
                                    color: 'black',
                                }
                            }
                            selectedDate={selectedDate}
                            onMonthTapped={(date) => {
                                this.setState({
                                    selectedDate: date,
                                    showMonth: false,
                                });
                            }}
                            maxDate={moment().add('year', 10)}
                        />}
                    </Card>
                </View>
                {
                    message &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: theme.FONT_FAMILY, fontSize: scale(theme.FONT_SIZE_MEDIUM)}}>
                            {message}
                        </Text>
                    </View>
                }
                <ScrollView style={EventsStyle.scrollView}>
                    {
                        events.map(event => selectedDate &&
                            moment(event.date_time).format("MMM YYYY") === moment(selectedDate).format("MMM YYYY")
                            && <CardView data_type={"event"} data={event} navigation={this.props.navigation}
                                         redirect={'Event'}/>)
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
