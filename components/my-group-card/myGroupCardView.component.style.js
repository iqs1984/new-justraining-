import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const MyGroupCardViewStyle = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: scale(16),
        alignItems: 'center',
    },
    image: {
        width: scale(80),
        height: scale(80),
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    memberContainer: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: scale(4),
        alignItems: 'center',
        marginTop: scale(8),
    },
    textContainer: {
        padding: scale(8),
        flex: 1
    },
    memberText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.SECONDARY_COLOR,
    },
});
