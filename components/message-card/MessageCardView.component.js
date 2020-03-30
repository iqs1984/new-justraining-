import * as React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Card, Text} from 'native-base';
import {MessageCarViewStyle} from './MessageCardView.component.style';
import moment from "moment";
import {getDate} from "../../App";

export const MessageCardView = (props) => {
    return <Card>
        <TouchableWithoutFeedback onPress={() => {
            props.navigation.navigate(props.redirect, {
                id: props.message.id
            });
        }}>
            <View>
                <View style={MessageCarViewStyle.header}>
                    <Text numberOfLines={1} style={MessageCarViewStyle.title}>
                        {props.message.title}
                    </Text>
                    <Text style={MessageCarViewStyle.dateTime}>
                        {/*01 Feb, 20 at 04:30 PM*/}
                        {getDate(props.message.created_at).format("DD MMM, YYYY hh:mm a")}
                    </Text>
                </View>
                <Text style={MessageCarViewStyle.desc} numberOfLines={2}>
                    {props.message.description}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    </Card>;
};
