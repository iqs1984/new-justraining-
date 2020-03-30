import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../styles/theme.style';
import {scale} from '../../../styles/scale.style';

export const TilesStyle = StyleSheet.create({
    tilesView: {
        backgroundColor: theme.PRIMARY_COLOR,
        opacity: 0.8,
        width: scale(Dimensions.get('screen').width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: scale(100)
    },
    tilesView1: {
        padding: 8,
    },
    icon: {
        width: scale(30),
        height: scale(30),
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_VIEW,
        marginTop: scale(10),
        textAlign: 'center',
    },
});
