import {Platform, StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';
import theme from '../../../../styles/theme.style';

export const EditProfileStyle = StyleSheet.create({

    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        padding: scale(16),
    },
    imageFullContainer: {
        alignItems: 'center',
    },
    photoContainer: {
        width: scale(100),
        height: scale(100),
        borderRadius: scale(50),
        marginBottom: scale(16),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: scale(50),
    },
    inputCard: {
        padding: scale(4),
    },
    inputItem: {
        borderBottomWidth: 0,
    },
    submitButton: {
        borderRadius: 0,
        backgroundColor: theme.PRIMARY_COLOR,
        height: scale(40),
        flex: 1,
        justifyContent: 'center',
        margin: scale(2),
        marginTop: scale(32),
    },
    buttonText: {
        fontFamily: Platform.OS === "ios"?theme.FONT_FAMILY:theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.SECONDARY_COLOR,
    },
    inputText: {
        fontFamily: theme.FONT_FAMILY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontSize: scale(theme.FONT_SIZE_MEDIUM),
        color: theme.PRIMARY_COLOR,
    },
    buttonImage: {
        color: theme.SECONDARY_COLOR,
        fontSize: scale(theme.FONT_SIZE_LARGE),
    },
    cameraButton: {
        backgroundColor: theme.MOST_DANGER_COLOR,
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
