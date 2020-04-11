import firebase from 'firebase'; // 4.8.1

class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }

    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyB3zVkaBPfUJjHbY_lez6i1Tymz4Pm1hC0",
            authDomain: "just-training-66adc.firebaseapp.com",
            databaseURL: "https://just-training-66adc.firebaseio.com",
            projectId: "just-training-66adc",
            storageBucket: "just-training-66adc.appspot.com",
            messagingSenderId: "977465953999",
            appId: "1:977465953999:web:a66069e2b71b7b103c31ba",
            measurementId: "G-9R4FDJ7Y71"
        });

    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({message}) {
                alert(message);
            }
        }
    };

    get uid() {
        return (firebase.auth().currentUser.uid || "");
    }

    get ref() {
        return firebase.database().ref('messages');
    }

    parse = snapshot => {
        const {timestamp: numberStamp, text, user, group_id} = snapshot.val();
        const {key: _id} = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            group_id,
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    on = (group_id, callback) =>
        this.ref
            .orderByChild("group_id")
            .equalTo(group_id)
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    // send the message to the Backend
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const {text, user, group_id} = messages[i];
            const message = {
                text,
                user,
                group_id,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    // close the connection to the Backend
    off() {
        this.ref.off();
    }
}

export default Fire;
