import {StyleSheet, Dimensions, Platform} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const ImageCardViewStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height / 4,
        marginBottom: scale(16),
    },
    row: {
        flexDirection: 'row',
        padding: scale(8),
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.SECONDARY_COLOR,
    },
    dateTime: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SECONDARY_COLOR,
        marginBottom: scale(4),
        marginTop: scale(4),
    },
    cardHeader: {
        padding: scale(16),
        position: 'absolute',
        bottom: 0,
    },
    subCardRow: {
        flexDirection: 'row',
        padding: scale(16),
    },
    icon: {
        width: scale(30),
        height: scale(30),
        // borderRadius: scale(15),
    },
    sportName: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SECONDARY_COLOR,
        marginBottom: scale(4),
        marginTop: scale(4),
    },
});
