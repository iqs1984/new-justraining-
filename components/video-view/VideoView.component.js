import * as React from 'react';
import {View, ImageBackground, Linking} from 'react-native';
import {VideoViewStyle} from './VideoView.component.style';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const VideoView = (props) => {

    return <View>
        <ImageBackground style={VideoViewStyle.image} source={
            {
                uri: props.data.image.url
            }
        }>
            <View style={VideoViewStyle.playButtonContainer}>
                <Button style={VideoViewStyle.playButton} onPress={() => {
                    //    props.data.link
                    Linking.openURL(props.data.link)
                }}>
                    <Icon name={'play'} style={VideoViewStyle.icon}/>
                </Button>
            </View>
        </ImageBackground>
    </View>;
};
