import {StyleSheet} from 'react-native';
import {scale} from '../../../styles/scale.style';
import theme from '../../../styles/theme.style';

export const NavigationRightStyle = StyleSheet.create({
    container: {
        marginRight: scale(8),
    },
    menu: {
        fontSize: scale(theme.FONT_SIZE_LARGE),
        color: theme.PRIMARY_COLOR,
    },
});
