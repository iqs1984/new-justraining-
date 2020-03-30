import * as React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, Text} from 'native-base';
import {DataCardViewStyle} from './DataCardView.component.style';
import Icon from 'react-native-vector-icons/Feather';
import {User} from "../../model/user-model/UserModel";
import {replaceWith} from "../../App";

export const DataCardView = (props) => {
    return <TouchableWithoutFeedback onPress={() => {
        props.redirect && props.navigation.navigate(props.redirect);
        !props.redirect && User.logout().then(() => {
            replaceWith("Login")
        })
    }}>
        <Card style={DataCardViewStyle.cardContainer}>
            <View>
                {props.image &&
                <Image resizeMode={'contain'} source={props.image}
                       style={DataCardViewStyle.image}
                />}
            </View>
            <View style={DataCardViewStyle.titleContainer}>
                <Text style={DataCardViewStyle.title}>
                    {props.title}
                </Text>
            </View>
            {props.showRighIcon !== false && <View style={DataCardViewStyle.iconContainer}>
                <Icon name={'chevron-right'} style={DataCardViewStyle.icon}/>
            </View>
            }
        </Card>
    </TouchableWithoutFeedback>;

};
