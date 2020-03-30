import {StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const PasswordRecoverStyle = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollview: {
        flex: 1,
    },
    userImage: {
        width: '100%',
        height: '100%',
    },
    userImageContainer: {
        width: scale(200),
        height: scale(80),
        // borderRadius: scale(40),
        // backgroundColor: theme.PRIMARY_VIEW,
        margin: scale(32),
    },
    inputCard: {
        padding: scale(4),
        width: '100%',
        flexDirection: 'row',
    },
    inputItem: {
        borderBottomWidth: 0,
        flex: 1,
    },
    inputText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    sendButton: {
        borderRadius: 0,
        backgroundColor: theme.PRIMARY_COLOR,
        height: scale(40),
        justifyContent: 'center',
        marginTop: scale(32),
        width: '100%',
    },
    sendButtonText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.SECONDARY_COLOR,
    },
    textIcon: {
        color: theme.PRIMARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_LARGE),
        padding: scale(8),
    },
    registrationText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
        marginTop: scale(32),
    },
    registrationButtonText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
        textDecorationLine: 'underline',
    },
});
