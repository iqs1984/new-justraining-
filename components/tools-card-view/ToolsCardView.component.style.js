import {StyleSheet,Platform} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const ToolsCardStyle = StyleSheet.create({
    container: {
        // padding: scale(16),
    },
    topContainer: {
        flexDirection: 'row',
    },
    descContainer: {
        flex: 1,
        padding: scale(16),
    },
    image: {
        width: scale(100),
        height: scale(100),
    },
    title: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
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
    footerViewContainer: {
        padding: scale(10),
        borderTopWidth: scale(0.3),
        borderTopColor: theme.MUTED_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sportText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.MUTED_COLOR,
    },
});
