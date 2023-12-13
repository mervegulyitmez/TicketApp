import { Alert, Platform } from 'react-native';

const alertPolyfill = (title, description, options, extra) => {
  // Check if options is defined and an array
  if (options && Array.isArray(options)) {
    const result = window.confirm([title, description].filter(Boolean).join('\n'));

    if (result) {
      const confirmOption = options.find(({ style }) => style !== 'cancel');
      confirmOption && confirmOption.onPress();
    } else {
      const cancelOption = options.find(({ style }) => style === 'cancel');
      cancelOption && cancelOption.onPress();
    }
  } else {
    // If options is not defined or not an array, fall back to a simple window.confirm
    window.confirm([title, description].filter(Boolean).join('\n'));
  }
};

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert;

export default alert;
