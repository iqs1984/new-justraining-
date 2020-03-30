import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const aspectRatio = height / width;
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => aspectRatio > 1.6 ? width / guidelineBaseWidth * size : width / guidelineBaseWidth * size - (size * 50 / 100);
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale, aspectRatio};
