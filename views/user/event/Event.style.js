import {Platform, StyleSheet} from 'react-native';
import theme from '../../../styles/theme.style';
import {scale} from '../../../styles/scale.style';

export const EventStyle = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 16,
    },
    container: {
        padding: scale(16),
    },
    subCardRow: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    subCardRow2: {
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: scale(8),
        marginLeft: scale(-8)
    },
    description: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
        marginTop: scale(16),
        marginBottom: scale(16),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmed: {
        borderRadius: 0,
        backgroundColor: theme.SUCCESS_COLOR,
        height: scale(30),
        flex: 1,
        justifyContent: 'center',
    },
    dontGo: {
        borderRadius: 0,
        backgroundColor: theme.DANGER_COLOR,
        height: scale(30),
        flex: 1,
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    image: {
        width: '100%',
        height: scale(200),
        marginTop: scale(8),
        marginBottom: scale(8)
    }
});
