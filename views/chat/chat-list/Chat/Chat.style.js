import {StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';
import theme from '../../../../styles/theme.style';

export const ChatStyle = StyleSheet.create({

    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        padding: scale(16),
    },
    footer: {
        padding: scale(8),
        backgroundColor: theme.MUTED_COLOR_2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: scale(16),
    },
    item: {
        backgroundColor: theme.SECONDARY_COLOR,
        flex: 1,
        borderRadius: scale(20),
        minHeight: scale(40),
        maxHeight: scale(100),
    },
    sendButton: {
        backgroundColor: theme.PRIMARY_COLOR,
        height: scale(40),
        width: scale(40),
        borderRadius: scale(20),
        marginLeft: scale(16),
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.SECONDARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
    },
    messageText: {
        padding: scale(8),
    },
});
