import * as React from 'react';
import {View, Image} from 'react-native';
import {Card, Text} from 'native-base';
import {MyGroupCardViewStyle} from './myGroupCardView.component.style';

export const MyGroupCardView = (props) => {
    return <Card style={MyGroupCardViewStyle.cardContainer}>
        <View>
            <Image style={MyGroupCardViewStyle.image} source={
                {
                    uri: props.data.image.url
                }
            }/>
        </View>
        <View style={MyGroupCardViewStyle.textContainer}>
            <Text style={MyGroupCardViewStyle.title}>
                {props.data.name}
            </Text>
            <View style={MyGroupCardViewStyle.memberContainer}>
                <Text style={MyGroupCardViewStyle.memberText}>
                    {props.data.players_count} Members
                </Text>
            </View>
        </View>
    </Card>;
};
