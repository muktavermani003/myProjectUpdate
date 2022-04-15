import { BASE_DIMENSIONS } from '../../Constants/Constant';
import { width, height } from './device';

const scale = width / BASE_DIMENSIONS.mobile.width;

function normalize(size) {
	return Math.round(scale * size);
}

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;

const normalizedWidth = size => (width / guidelineBaseWidth) * size;
const normalizedHeight = size => (height / guidelineBaseHeight) * size;

const normalScale = size => normalizedWidth(size);
const verticalScale = size => normalizedHeight(size);
const moderateScale = (size, factor = 0.5) => size + (normalScale(size) - size) * factor;
const lineHeightScale = (fontSize, factor = 1.2) => Math.ceil(normalizedHeight(fontSize * factor));

export default normalize;
export { normalScale, verticalScale, moderateScale, lineHeightScale };