import {StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const DataCardViewStyle = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        padding: scale(16),
    },
    title: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
    },
    image: {
        width: scale(30),
        height: scale(30),
        margin: scale(16),
    },
    iconContainer: {
        padding: scale(16),
        borderLeftWidth: scale(0.3),
        borderLeftColor: theme.MUTED_COLOR,
    },
    icon: {
        fontSize: scale(theme.FONT_SIZE_LARGE),
        color: theme.PRIMARY_COLOR,
    },
});
