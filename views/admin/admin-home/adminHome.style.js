import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../../styles/scale.style';
import theme from '../../../styles/theme.style';

export const AdminHomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(0),
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: scale(8),
    },
    userImageContainer: {
        width: scale(200),
        height: scale(80),
        // borderRadius: scale(40),
        // backgroundColor: theme.PRIMARY_VIEW,
        margin: scale(32),
    },
    userImage: {
        width: '100%',
        height: '100%',
    },
    userName: {
        margin: scale(16),
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
    },
    safeAreaView: {
        flex: 1,
    },
    logoutButton: {
        borderRadius: scale(0),
        backgroundColor: theme.PRIMARY_COLOR,
        padding: scale(8),
        margin: scale(12),
    },
    logoutText: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    logoutIcon: {
        color: theme.SECONDARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
    },
    freeSpace: {
        flex: 1,
    },
});
