import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const CalculatorStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        padding: scale(16),
    },
    tabBarUnderlineStyle: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    tabStyle: {
        backgroundColor: theme.SECONDARY_COLOR,
    },
    tabTextStyle: {
        color: theme.PRIMARY_COLOR,
    },
    activeTextStyle: {
        color: theme.PRIMARY_COLOR,
    },
    activeTabStyle: {
        backgroundColor: theme.SECONDARY_COLOR,
    },
    labelText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },

    calculationContainer: {
        padding: 16,
    },
    calculationSubContainer: {
        flex: 1,
        backgroundColor: theme.SECONDARY_COLOR,
        borderRadius: 0,
        paddingTop: scale(16),
    },
    calculationLabelText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.MUTED_COLOR,
    },
    calImage: {
        marginRight: scale(16),
    },
    footer: {
        padding: scale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.SECONDARY_COLOR,
    },
    calculationHeaderText: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
        textAlign: 'center',
    },
    resetButton: {
        borderRadius: 0,
        backgroundColor: theme.PRIMARY_COLOR,
    },
});
