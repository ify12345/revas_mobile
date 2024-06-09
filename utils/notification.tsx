import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import notifee from '@notifee/react-native'

export default function displayNotification(remoteMessage: FirebaseMessagingTypes.RemoteMessage) {
  const {notification, data} = remoteMessage
  return notifee.displayNotification({
    title: notification?.title,
    body: notification?.body,
    android: {
      largeIcon: require('../../assets/icon.png'),
      channelId: 'default'
    },
    ios: {
      sound: 'default',
      foregroundPresentationOptions: {
        alert: true,
        badge: true,
        sound: true
      }
    },
    data
  })
}