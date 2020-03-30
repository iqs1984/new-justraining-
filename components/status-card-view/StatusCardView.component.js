import * as React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {StatusCardViewStyle} from './StatusCardView.component.style';
import {Text, Card} from 'native-base';

export const StatusCardView = (props) => {
    return <TouchableWithoutFeedback
        onPress={() => {
            props.navigation.navigate("MemberList", {
                type: props.type,
                type_id: props.type_id,
                id: props.id,
                data_type: props.data_type
            })
        }}>
        <View style={StatusCardViewStyle.container}>
            {/*<Image resizeMode={'cover'} style={StatusCardViewStyle.image}*/}
            {/*       source={require('../../assets/frame/Frame.png')}/>*/}
            {/*<View style={StatusCardViewStyle.opacityView}/>*/}
            <View style={StatusCardViewStyle.row}>
                <View style={StatusCardViewStyle.mainContainer}>
                    <Text numberOfLines={2} style={StatusCardViewStyle.title}>
                        {props.title}
                    </Text>
                    <Text numberOfLines={1}
                          style={props.type_id !== 1 ? StatusCardViewStyle.danger_count : StatusCardViewStyle.count}>
                        {props.count}
                    </Text>
                </View>
                {/*<View style={*/}
                {/*    StatusCardViewStyle.vector*/}
                {/*}/>*/}
            </View>
        </View>
    </TouchableWithoutFeedback>
};
