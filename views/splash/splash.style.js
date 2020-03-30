import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {scale} from '../../styles/scale.style';

export const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%"
    },
});
