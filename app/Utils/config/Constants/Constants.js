import { Platform } from 'react-native';

const Constants = {
  IS_ENV_DEVELOPMENT: '__DEV__',
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
  //BASE_URL:'https://dmapp.ics-global.in:9152/api/v1/',//dev

  //18602102484
  //02146159000

  HOST_URL: 'https://gorest.co.in/public/', //DEV
  BASE_URL: 'https://gorest.co.in/public/v2/', //staging      //DEV

  // HOST_URL: 'https://dm-preprod.dpworld.com/',
  // BASE_URL: 'https://dm-preprod.dpworld.com/api/v1/',

  // HOST_URL: 'https://dm-dev.dpworld.com/',
  // BASE_URL: 'https://dm-dev.dpworld.com/api/v1/',

  // HOST_URL: 'https://www.dragonmart.ae/', //PROD
  // BASE_URL: 'https://www.dragonmart.ae/api/v1/', //PROD

  IS_VALID_EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  IS_VALID_PASSWORD_REGEX: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
};

export default Constants;