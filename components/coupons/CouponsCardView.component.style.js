import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../styles/scale.style';
import theme from '../../styles/theme.style';

export const CouponsCardViewStyle = StyleSheet.create({
    container: {
        padding: scale(8),
        // flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        padding: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: scale(0.5),
        borderColor: theme.MUTED_COLOR_2
    },
    couponTitle: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    descText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
    },
    titlesContainer: {
        flex: 1,
    },
    couponImage: {
        margin: scale(8),
        marginLeft: 0,
        width: scale(80),
        height: scale(80),
    },
    percentageContainer: {
        // backgroundColor: theme.PRIMARY_COLOR,
        // height: scale(40),
        // width: scale(40),
        // borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: scale(8)
    },
    percentageText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.NAVIGATION_BAR,
        textAlign: 'center',
    },
});
