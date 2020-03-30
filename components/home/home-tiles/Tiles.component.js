import * as React from 'react';
import {TilesStyle} from './tiles.component.style';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Text} from 'native-base';

export const Tiles = (props) => {
    return <TouchableWithoutFeedback onPress={() => {
        console.log(props.menu.title);
        props.navigation.navigate(props.menu.redirect);
    }}>
        <View style={TilesStyle.tilesView1}>
            <View style={TilesStyle.tilesView}>
                <Image source={props.menu.icon} style={TilesStyle.icon}/>
                <Text style={TilesStyle.title}>
                    {props.menu.title}
                </Text>
            </View>
        </View>
    </TouchableWithoutFeedback>;
};
