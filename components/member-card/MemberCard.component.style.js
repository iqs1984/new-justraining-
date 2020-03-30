import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const MemberCardViewStyle = StyleSheet.create({
    card: {
        padding: scale(16),
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
    },
    textContainer: {
        paddingLeft: scale(16),
    },
    title: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    groupTitle: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.MUTED_COLOR,
        marginTop: scale(8),
    },
});
