import {StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const StatusCardViewStyle = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        height: 80,
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    opacityView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: theme.PRIMARY_COLOR,
        opacity: 0.8,
    },
    row: {
        flexDirection: 'row',
        // width: '75%',
    },
    mainContainer: {
        backgroundColor: theme.SECONDARY_COLOR,
        // flex: 1,
        height: '100%',
        // width: 100,
        padding: scale(5),
        justifyContent: 'center',
    },
    vector: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: theme.SECONDARY_COLOR,
    },
    title: {
        fontFamily: theme.FONT_FAMILY,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        color: theme.PRIMARY_COLOR,
    },
    count: {
        fontFamily: theme.FONT_FAMILY,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: theme.SUCCESS_COLOR,
    },
    danger_count: {
        fontFamily: theme.FONT_FAMILY,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: theme.DANGER_COLOR,
    },
});
