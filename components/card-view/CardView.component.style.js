import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const CardViewStyle = StyleSheet.create({
    container: {
        // height: scale(150),
    },
    row: {
        flexDirection: 'row',
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
    cardHeader: {
        // borderBottomWidth: scale(0.5),
        // borderBottomColor: theme.MUTED_COLOR,
        padding: scale(16),
        paddingBottom: scale(4),
    },
    subCardRow: {
        flexDirection: 'row',
        padding: scale(16),
        flexWrap: "wrap",
        borderBottomWidth: scale(0.5),
        borderBottomColor: theme.MUTED_COLOR,
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
        color: theme.PRIMARY_COLOR,
        marginBottom: scale(4),
        marginTop: scale(4),
    },
});
