import React, {Component} from 'react';
import Router from './src/router/';
import {NavigationContainer} from '@react-navigation/native';
import persistStore from './src/components/Redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import PushNotification from 'react-native-push-notification';
import {Provider} from 'react-redux';

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },
//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
//     notification.finish(() => {});
//   },
//   onAction: function (notification) {
//     console.log('ACTION:', notification.action);
//     console.log('NOTIFICATION:', notification);
//   },
//   onRegistrationError: function (err) {
//     console.error(err.message, err);
//   },
//   requestPermissions: true,
// });

PushNotification.createChannel(
  {
    channelId: 'Payment', // (required)
    channelName: 'Payment Notification', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

export default class App extends Component {
  render() {
    const {store, persistor} = persistStore();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
