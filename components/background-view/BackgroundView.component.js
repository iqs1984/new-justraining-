import * as React from 'react';
import {ImageBackground} from 'react-native';
import {BackgroundViewStyle} from './backgroundView.component.style';

export const BackgroundView = (props) => {
    return <ImageBackground resizeMode={'cover'} style={BackgroundViewStyle.container}
                            source={require('../../assets/background/background.png')}
    >
        {props.children}
    </ImageBackground>;
};
