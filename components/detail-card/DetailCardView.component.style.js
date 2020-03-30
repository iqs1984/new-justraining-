import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const DetailCardViewStyle = StyleSheet.create({
    container: {},
    header: {
        padding: scale(16),
        borderBottomWidth: scale(0.3),
        borderBottomColor: theme.MUTED_COLOR,
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    dateTime: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.MUTED_COLOR,
        marginBottom: scale(4),
        marginTop: scale(4),
    },
    desc: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
        padding: scale(16),
        lineHeight: scale(21),
    },
    image: {
        width: "100%",
        height: scale(200),
    }
});
