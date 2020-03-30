import {StyleSheet} from 'react-native';
import theme from '../../../styles/theme.style';
import {scale} from '../../../styles/scale.style';

export const EventsStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    dateViewContainer: {
        padding: scale(8),
    },
    scrollView: {
        flex: 1,
        padding: scale(8),
    },
    monthContainer: {
        padding: scale(16),
        backgroundColor: theme.SECONDARY_COLOR,
        alignItems: 'center',
    },
    icon: {
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    monthText: {
        fontSize: scale(theme.FONT_SIZE_SMALL),
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        color: theme.PRIMARY_COLOR,
    },
});
