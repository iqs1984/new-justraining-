import {Platform, StyleSheet} from 'react-native';
import theme from '../../../styles/theme.style';
import {scale} from '../../../styles/scale.style';

export const MyTrainingStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    fullDateContainer: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: scale(8),
    },
    row: {
        flexDirection: 'row',
        padding: scale(8),
    },
    fullDateText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    fullDateYearText: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.SECONDARY_COLOR,
    },
    dayName: {
        backgroundColor: theme.SECONDARY_COLOR,
        padding: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(2),
    },
    dayNameText: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
    },
    scrollView: {
        flex: 1,
        padding: scale(8),
    },
    bottomButton: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25),
        position: 'absolute',
        bottom: scale(32),
        right: scale(32),
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonIcon: {
        fontSize: scale(theme.FONT_SIZE_LARGE),
        color: theme.SECONDARY_COLOR,
    },
});
