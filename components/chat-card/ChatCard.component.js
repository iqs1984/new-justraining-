import * as React from 'react';
import {Card, Text} from 'native-base';
import {ChatCardStyle} from './ChatCard.component.style';
import {View} from 'react-native';

export const ChatCard = (props) => {
    return <View style={ChatCardStyle.row}>
        {props.left && <View style={ChatCardStyle.freeContainer}/>}
        <Card style={ChatCardStyle.container}>
            <Text style={props.right ? ChatCardStyle.nameLeft : ChatCardStyle.nameRight}>
                {props.sender}
            </Text>
            <Text style={ChatCardStyle.desc}>
                {props.message}
            </Text>
            <Text style={ChatCardStyle.date_time}>
                {props.date_time}
            </Text>
        </Card>
        {props.right && <View style={ChatCardStyle.freeContainer}/>}
    </View>;
};
