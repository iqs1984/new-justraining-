import * as React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, Text} from 'native-base';
import {CardViewStyle} from './CardView.component.style';
import {StatusCardView} from '../status-card-view/StatusCardView.component';
import moment from "moment";
import {scale} from "../../styles/scale.style";
import {getDate} from "../../App";

export const CardView = (props) => {
    return <TouchableWithoutFeedback onPress={() => {
        props.navigation.navigate(props.redirect, {
            id: props.data.id
        });
    }}>
        <Card style={CardViewStyle.container}>
            <View style={[CardViewStyle.row, CardViewStyle.cardHeader]}>
                <View>
                    <Text style={CardViewStyle.title}>
                        {props.data.title}
                    </Text>
                    <Text style={CardViewStyle.dateTime}>
                        {/*01 Feb, 20 at 04:30 PM*/}
                        {getDate(props.data.date_time).format("DD MMM, YYYY hh:mm a")}
                    </Text>
                </View>
                <View style={{flex: 1}}/>
                <View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        {props.data.groups.slice(0, 2).map(group => <View>
                            <Image
                                source={
                                    {
                                        uri: group.image.url
                                    }
                                } style={CardViewStyle.icon}/></View>)}
                    </View>
                </View>
            </View>
            <View style={CardViewStyle.subCardRow}>
                {/*<StatusCardView data_type={props.data_type} title={'Confirmed Players'}*/}
                {/*                count={props.data.confirmed_players_count}*/}
                {/*                id={props.data.id}*/}
                {/*                navigation={props.navigation}*/}
                {/*                type={"Confirmed Players"}*/}
                {/*                type_id={1}*/}
                {/*/>*/}
                {/*<View style={{width: 8}}/>*/}
                {/*<StatusCardView*/}
                {/*    data_type={props.data_type}*/}
                {/*    title={'Unconfirmed Players'} count={props.data.unconfirmed_players_count}*/}
                {/*    id={props.data.id}*/}
                {/*    navigation={props.navigation}*/}
                {/*    type={"Unconfirmed Players"}*/}
                {/*    type_id={2}*/}
                {/*/>*/}
                {/*<View style={{width: 8}}/>*/}
                {/*<StatusCardView*/}
                {/*    data_type={props.data_type}*/}
                {/*    title={'Don\'t Go Players'} count={props.data.do_not_confirmed_players_count}*/}
                {/*    id={props.data.id}*/}
                {/*    navigation={props.navigation}*/}
                {/*    type={'Don\'t Go Players'}*/}
                {/*    type_id={3}*/}
                {/*/>*/}
            </View>
            {/*<View style={CardViewStyle.subCardRow}>*/}
            {/*    <StatusCardView*/}
            {/*        data_type={props.data_type}*/}
            {/*        title={'Don\'t Go Players'} count={props.data.do_not_confirmed_players_count}*/}
            {/*        id={props.data.id}*/}
            {/*        navigation={props.navigation}*/}
            {/*        type={'Don\'t Go Players'}*/}
            {/*        type_id={3}*/}
            {/*    />*/}
            {/*    <View style={{flex: 1}}/>*/}
            {/*</View>*/}
            <View style={{flexDirection: "row", width: "100%", padding: scale(8)}}>
                <Text style={CardViewStyle.sportName}>
                    {props.data.sports.slice(0, 2).map(sport => sport.name).join(", ")}
                </Text>
                <View style={{flex: 1}}/>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    {props.data.sports.slice(0, 2).map(sport => <View>
                        <Image
                            source={
                                {
                                    uri: sport.icon.url
                                }
                            } style={CardViewStyle.icon}/></View>)}
                </View>
            </View>

            <View/>
        </Card>
    </TouchableWithoutFeedback>;
};
