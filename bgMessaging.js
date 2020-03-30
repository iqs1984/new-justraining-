// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type { RemoteMessage } from 'react-native-firebase/messaging';

export default async (message: RemoteMessage) => {
    // handle your message

    return Promise.resolve();
}
