jest.useFakeTimers();
import * as ReactNative from 'react-native';
//INFO: UXCamServiceAdapter has to be initialized during the app startup
// NativeEventEmitter is used in the constructor of UXCamServiceAdapter and for testing purpose there is a need for mock
jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      NativeModules: {},
      NativeEventEmitter: class {
        addListener = () => {};
      },
    },
    ReactNative,
  );
});
