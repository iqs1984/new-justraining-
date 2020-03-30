import * as React from 'react';
import {Button, Card, Text} from 'native-base';
import {View, Image, TouchableOpacity, Linking, TouchableWithoutFeedback, Modal} from 'react-native';
import {DetailCardViewStyle} from './DetailCardView.component.style';
import {MessageCarViewStyle} from '../message-card/MessageCardView.component.style';
import {CardViewStyle} from '../card-view/CardView.component.style';
import moment from "moment";
import {getDate} from "../../App";
import {scale} from "../../styles/scale.style";
import {TrainingStyle} from "../../views/user/training/Training.style";
import ImageViewer from "react-native-image-zoom-viewer";
import Icon from "react-native-vector-icons/index";
import theme from "../../styles/theme.style";

export const DetailCard = (props) => {
    return <Card>
        <View style={DetailCardViewStyle.header}>
            <View>
                <Text style={DetailCardViewStyle.title}>
                    {props.data.title}
                </Text>
                <Text style={DetailCardViewStyle.dateTime}>
                    {props.type === "message" ? getDate(props.data.created_at).format("DD MMM, YYYY hh:mm a") : getDate(props.data.date_time).format("DD MMM, YYYY hh:mm a")}
                </Text>
            </View>
        </View>
        <Text style={DetailCardViewStyle.desc}>
            {props.data.description}
        </Text>
        {
            props.type === "message" && <View style={{padding: scale(16)}}>
                <TouchableOpacity onPress={() => {
                    Linking.openURL(props.data.link)
                }}>
                    <Text style={{
                        color: "blue",
                        textDecorationLine: "underline",
                        marginBottom: scale(8)
                    }}>
                        {props.data.link}
                    </Text>
                </TouchableOpacity>
                {props.data.image.exists &&
                <TouchableWithoutFeedback onPress={props.isVisible}><Image style={TrainingStyle.image} source={{
                    uri: props.data.image.url
                }}/></TouchableWithoutFeedback>}
            </View>
        }
    </Card>;
};
