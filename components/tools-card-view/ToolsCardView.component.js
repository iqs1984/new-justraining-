import * as React from 'react';
import {Card, Text} from 'native-base';
import {ToolsCardStyle} from './ToolsCardView.component.style';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {CardViewStyle} from '../card-view/CardView.component.style';
import moment from "moment";
import {ImageCardViewStyle} from "../image-card-view/ImageCardView.component.style";
import {getDate} from "../../App";

export const ToolsCardView = (props) => {
    return <Card style={ToolsCardStyle.container}>
        <TouchableWithoutFeedback onPress={() => {
            props.navigation.navigate(props.redirect, {
                id: props.data.id
            });
        }}>
            <View>
                <View style={ToolsCardStyle.topContainer}>
                    <View style={ToolsCardStyle.descContainer}>
                        <Text style={ToolsCardStyle.title}>
                            {props.data.title}
                        </Text>
                        <Text style={ToolsCardStyle.dateTime}>
                            {getDate(props.data.date_time).format("DD MMM, YYYY hh:mm a")}
                            {/*01 Feb, 20 at 04:30 PM*/}
                        </Text>
                    </View>
                    <Image style={ToolsCardStyle.image} source={
                        {
                            uri: props.data.image.url
                        }
                    }/>
                </View>
                <View style={ToolsCardStyle.footerViewContainer}>
                    <Text style={ToolsCardStyle.sportText}>
                        {props.data.sports.slice(0, 2).map(sport => sport.name).join(", ")}
                    </Text>
                    <View style={{flex: 1}}/>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                            {props.data.sports.slice(0, 2).map(sport => <View style={{}}>
                                <Image
                                    source={
                                        {
                                            uri: sport.icon.url
                                        }
                                    } style={CardViewStyle.icon}/></View>)}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Card>;
};
