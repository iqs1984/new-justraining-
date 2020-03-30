import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';
import theme from '../../../../styles/theme.style';

export const CreateMessageStyle = StyleSheet.create({

    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        padding: scale(16),
    },
    inputCard: {
        padding: scale(4),
    },
    inputItem: {
        borderBottomWidth: 0,
    },
    inputText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
        minHeight: scale(40),
        maxHeight: scale(100)
    },
    addImageButton: {
        borderRadius: 0,
        backgroundColor: theme.SECONDARY_COLOR,
        height: scale(40),
        flex: 1,
        padding: scale(8),
    },
    addImageButtonText: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
    },
    addImageButtonImage: {
        color: theme.PRIMARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_LARGE),
    },
    freeSpace: {
        flex: 1,
    },
    sendButton: {
        borderRadius: 0,
        backgroundColor: theme.PRIMARY_COLOR,
        height: scale(40),
        flex: 1,
        justifyContent: 'center',
        marginTop: scale(32),
    },
    sendButtonText: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    multiSelectMainWrapper: {
        marginLeft: scale(8),
    },
    searchInputStyle: {
        // height: scale(100),
    },
    selectText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    styleDropdownMenuSubsection: {
        backgroundColor: 'transparent',
        borderBottomColor: 'white',
        borderBottomWidth: 0,
        height: scale(40),
    },
});
