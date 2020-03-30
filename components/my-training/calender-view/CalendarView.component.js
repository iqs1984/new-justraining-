import * as React from 'react';
import {View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {CalendarViewComponentStyle} from './CalendarView.component.style';
import moment from 'moment';
import theme from '../../../styles/theme.style'
import {scale} from "../../../styles/scale.style";

export const CalendarView = (props) => {
    return <View style={CalendarViewComponentStyle.container}>
        <CalendarStrip
            calendarAnimation={{type: 'sequence', duration: 30}}
            // daySelectionAnimation={{type: 'border', duration: 200, backgroundColor: 'pink'}}
            highlightDateNumberStyle={{color: theme.PRIMARY_COLOR}}
            highlightDateNameStyle={{color: theme.PRIMARY_COLOR}}
            // calendarHeaderStyle={{height: 0}}
            style={{height: 100, marginTop: scale(8)}}
            datesWhitelist={props.datesWhitelist}
            selectedDate={props.selectedDate}
            onDateSelected={props.onDateSelected}
        />
    </View>;
};
