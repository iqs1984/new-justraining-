import * as React from 'react';
import {Card, Text} from 'native-base';
import {MemberCardViewStyle} from './MemberCard.component.style';
import {Image, View} from 'react-native';

export const MemberCard = (props) => {
    return <Card style={MemberCardViewStyle.card}>
        <Image style={MemberCardViewStyle.image} source={
            {
                uri: props.data.image.url
            }
        }/>
        <View style={MemberCardViewStyle.textContainer}>
            <Text style={MemberCardViewStyle.title}>
                {props.data.name}
            </Text>
            <Text style={MemberCardViewStyle.groupTitle}>
                {props.member_list.groups.map(group => group.name).join(", ")}
            </Text>
        </View>
    </Card>;
};
