import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const ChatCardViewStyle = StyleSheet.create({

    container: {
        padding: scale(16),
        flexDirection: 'row',
        marginTop: scale(16),
    },
    image: {
        width: scale(100),
        height: scale(100),
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
        marginLeft: scale(16),
    },
    memberCount: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
        marginLeft: scale(16),
        marginTop: scale(6),
    },
    countView: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(35 / 2),
        backgroundColor: theme.PRIMARY_COLOR,
        position: 'absolute',
        top: scale(-10),
        right: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    unseenCount: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.SECONDARY_COLOR,
    },
});
