import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';
import theme from '../../../../styles/theme.style';

export const CreateTrainingStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        padding: scale(16),
    },
    multiSelectMainWrapper: {
        marginLeft: scale(8),
    },
    searchInputStyle: {
        // height: scale(100),
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
    dateTime: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    createLinkButton: {
        borderRadius: scale(0),
        backgroundColor: theme.PRIMARY_COLOR,
        padding: scale(8),
        marginTop: scale(32),
        width: '100%',
    },
    createLinkButtonText: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    createLinkButtonIcon: {
        color: theme.SECONDARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
    },
    preConfirmContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(32),
    },
    preConfirmButton: {
        width: scale(25),
        height: scale(25),
        borderColor: theme.PRIMARY_COLOR,
        borderWidth: scale(2),
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(16),
    },
    preConfirmButtonIcon: {
        fontSize: scale(theme.FONT_SIZE_SMALL),
    },
    preConfirmLabel: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
});
