import * as React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {ImageCardViewStyle} from './ImageCardView.component.style';
import {CardViewStyle} from '../card-view/CardView.component.style';
import {Card, Text} from 'native-base';
import moment from "moment";
import {getDate} from "../../App";

export const ImageCardView = (props) => {
    return <View style={ImageCardViewStyle.container}>
        <ImageBackground style={ImageCardViewStyle.headerImage} source={
            {
                uri: props.data.header_image.url
            }
        }>
            <ImageBackground style={ImageCardViewStyle.headerImage} source={require('../../assets/grad/grad.png')}>
                <View style={[ImageCardViewStyle.row, ImageCardViewStyle.cardHeader]}>
                    <View>
                        <Text style={ImageCardViewStyle.title}>
                            {props.data.title}
                        </Text>
                        <Text style={ImageCardViewStyle.dateTime}>
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
                            {props.data.sports.slice(0, 2).map(sport => <View style={{flex: 1}}>
                                <Image
                                    source={
                                        {
                                            uri: sport.icon.url
                                        }
                                    } style={ImageCardViewStyle.icon}/></View>)}
                        </View>
                        <Text style={ImageCardViewStyle.sportName}>
                            {props.data.sports.slice(0, 2).map(sport => sport.name).join(", ")}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    </View>;
};
