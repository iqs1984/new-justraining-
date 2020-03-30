import {StyleSheet} from 'react-native';
import {scale} from '../../../styles/scale.style';
import theme from '../../../styles/theme.style';

export const CouponDetailStyle = StyleSheet.create({

    container: {
        padding: 8,
        width: "100%",
    },
    colorIcon: {
        color: theme.PRIMARY_COLOR,
        position: "absolute",
        fontSize: scale(theme.FONT_SIZE_LARGE)
    }
});
