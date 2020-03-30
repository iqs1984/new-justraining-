import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../styles/theme.style';
import {scale} from '../../styles/scale.style';

export const VideoViewStyle = StyleSheet.create({
    image: {
        height: Dimensions.get('screen').height / 3,
        width: '100%',
    },
    playButtonContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.TRANSPARENT_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButton: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: theme.SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.PRIMARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_SMALL),
    },
});
