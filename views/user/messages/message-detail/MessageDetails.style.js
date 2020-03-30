import {StyleSheet} from 'react-native';
import {scale} from '../../../../styles/scale.style';

export const MessageDetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        padding: scale(16),
    },
    dataContainer: {
        flex: 1,
        // marginTop: scale(-80),
    },
});
