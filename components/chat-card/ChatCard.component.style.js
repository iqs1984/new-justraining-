import {StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const ChatCardStyle = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        padding: scale(16),
        flex: 1,
    },
    desc: {
        lineHeight: scale(21),
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.PRIMARY_COLOR,
        marginTop: scale(8),
    },
    date_time: {
        lineHeight: scale(21),
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.MUTED_COLOR,
        marginTop: scale(8),
    },
    nameLeft: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.ORANGE_COLOR,
    },
    nameRight: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SUCCESS_COLOR,
    },
    freeContainer: {
        flex: 1,
        maxWidth: '20%',
    },
});
