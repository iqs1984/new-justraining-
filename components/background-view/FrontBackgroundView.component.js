import * as React from 'react';
import {ImageBackground} from 'react-native';
import {BackgroundViewStyle} from './backgroundView.component.style';

export const FrontBackgroundView = (props) => {
    return <ImageBackground resizeMode={'cover'} style={BackgroundViewStyle.container}
                            source={require('../../assets/background/back2.png')}
    >
        {props.children}
    </ImageBackground>;
};
