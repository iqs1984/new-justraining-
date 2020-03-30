import {Dimensions, Platform, StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';
import theme from "../../../../styles/theme.style";

export const ToolsDetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        // padding: scale(16),
    },
    dataContainer: {
        flex: 1,
        backgroundColor: theme.SECONDARY_COLOR
    },
    title: {
        fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
        textAlign: "center"
    },
    dateTime: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_EXTRA_SMALL),
        color: theme.MUTED_COLOR,
        marginBottom: scale(4),
        marginTop: scale(4),
        textAlign: "center"
    },
    desc: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_SMALL),
        color: theme.PRIMARY_COLOR,
        padding: scale(16),
        lineHeight: scale(21),
    },
    header: {
        padding: scale(16),
        // borderBottomWidth: scale(0.3),
        backgroundColor: theme.SECONDARY_COLOR,
    },
    playButtonContainer: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: scale(32)
    },
    playButton: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: theme.SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.PRIMARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
    },
    image: {
        height: Dimensions.get('screen').height / 3,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
});
