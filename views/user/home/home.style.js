import {StyleSheet} from 'react-native';
import {scale} from '../../../styles/scale.style';
import theme from '../../../styles/theme.style';

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(8),
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        padding: scale(8),
    },
    userImageContainer: {
        width: scale(80),
        height: scale(80),
        borderRadius: scale(40),
        backgroundColor: theme.PRIMARY_VIEW,
        padding: scale(5),
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: scale(40),
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
});
