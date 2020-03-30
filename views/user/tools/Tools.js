import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {ToolsStyle} from './tools.style';
import {ToolsCardView} from '../../../components/tools-card-view/ToolsCardView.component';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {MyTrainingStyle} from '../my-trainings/myTraining.style';
import {Text} from 'native-base';
import {CalendarView} from '../../../components/my-training/calender-view/CalendarView.component';
import {VideoModel} from "../../../model/video-model/VideoModel";
import moment from "moment";
import theme from "../../../styles/theme.style";
import {scale} from "../../../styles/scale.style";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";

export class Tools extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Tools',
            headerRight: <NavigationRight/>,
        };
    };

    state = {
        selectedDate: moment()
    }

    componentDidMount(): void {
        VideoModel.getMessages().then(({video, message}) => {
            if (video) {
                this.setState({
                    videos: video
                }, () => {
                    const dates = video.map(video => parseInt(video.date_timestamp))
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

    render() {
        const {videos = [], selectedDate, dates, marked_dates, message} = this.state
        return <BackgroundView>
            <View style={ToolsStyle.container}>
                {/*<View style={MyTrainingStyle.row}>*/}
                {/*    <View style={{flex: 1}}/>*/}
                {/*    <View style={MyTrainingStyle.fullDateContainer}>*/}
                {/*        <Text style={MyTrainingStyle.fullDateText}>*/}
                {/*            {moment(selectedDate).format("DD MMM")} <Text*/}
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
                <ScrollView style={ToolsStyle.scrollView}>
                    {
                        videos.map(video => moment(parseInt(video.date_timestamp)).format("DD/MM/YYYY") === moment(selectedDate).format("DD/MM/YYYY") &&
                            <ToolsCardView data={video} navigation={this.props.navigation}
                                           redirect={'ToolsDetails'}/>)
                    }
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
