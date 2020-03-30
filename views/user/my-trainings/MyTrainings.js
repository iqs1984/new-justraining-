import * as React from 'react';
import {View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {MyTrainingStyle} from './myTraining.style';
import {CalendarView} from '../../../components/my-training/calender-view/CalendarView.component';
import {Text, Button} from 'native-base';
import {CardView} from '../../../components/card-view/CardView.component';
import Icon from 'react-native-vector-icons/Feather';
import {scale} from '../../../styles/scale.style';
import {TrainingModel} from "../../../model/training-model/TrainingModel";
import {User} from "../../../model/user-model/UserModel";
import {NavigationEvents} from "react-navigation";
import moment from "moment";
import theme from '../../../styles/theme.style'
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class MyTrainings extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'My Trainings',
            headerRight: <NavigationRight/>,
        };
    };

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            this.setState({
                is_admin: user.admin
            })
        })

    }

    getTraining = () => {
        TrainingModel.getTrainings().then(({trainings, message}) => {
            // alert(JSON.stringify(message))
            if (trainings) {
                this.setState({
                    trainings
                }, () => {
                    const dates = trainings.map(training => parseInt(training.date_timestamp))
                    this.setState({
                        dates,
                        marked_dates: dates
                    })
                })
            } else {
                this.setState({
                    message
                })
            }
        })
    }
    state = {
        selectedDate: moment()
    }

    render() {
        const {trainings = [], is_admin, selectedDate, dates, marked_dates, message} = this.state
        return <BackgroundView>
            <View style={MyTrainingStyle.container}>
                <NavigationEvents onWillFocus={() => {
                    this.getTraining()
                }}/>
                {/*<View style={MyTrainingStyle.row}>*/}
                {/*    <View style={{flex: 1}}/>*/}
                {/*    <View style={MyTrainingStyle.fullDateContainer}>*/}
                {/*        <Text style={MyTrainingStyle.fullDateText}>*/}
                {/*            {moment(selectedDate).format("DD MMM")}<Text*/}
                {/*            style={MyTrainingStyle.fullDateYearText}>{` ${moment(selectedDate).format("YYYY")}`}</Text>*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
                <CalendarView selectedDate={selectedDate} datesWhitelist={marked_dates} onDateSelected={date => {
                    this.setState({
                        selectedDate: date
                    })
                }}/>
                <View style={MyTrainingStyle.dayName}>
                    <Text style={MyTrainingStyle.dayNameText}>
                        {moment(selectedDate).format("dddd").toUpperCase()}
                    </Text>
                </View>
                {
                    message &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: theme.FONT_FAMILY, fontSize: scale(theme.FONT_SIZE_MEDIUM)}}>
                            {message}
                        </Text>
                    </View>
                }
                <ScrollView style={MyTrainingStyle.scrollView}>
                    {
                        trainings.map(training => moment(parseInt(training.date_timestamp)).format("DD/MM/YYYY") === moment(selectedDate).format("DD/MM/YYYY") &&
                            <CardView data_type={"training"} data={training} navigation={this.props.navigation}
                                      redirect={'Training'}/>)
                    }
                </ScrollView>
                {is_admin && <Button style={MyTrainingStyle.bottomButton} onPress={() => {
                    this.props.navigation.navigate('CreateTraining');
                }}>
                    <Icon style={MyTrainingStyle.bottomButtonIcon} name={'plus'}/>
                </Button>}
            </View>
        </BackgroundView>
    }
}
