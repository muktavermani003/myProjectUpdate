import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const X_WIDTH = 375;
const X_HEIGHT = 812;

export { width, height };

export const isIPhoneX = () => {
	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTVOS &&
		((height === X_HEIGHT && width === X_WIDTH) || (width === X_WIDTH && height === X_HEIGHT))
	);
};