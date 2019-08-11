import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBDuK77q6sB1WXnYXZ1Pu7fVcb1qdFci-A",
    authDomain: "crwn-db-29df5.firebaseapp.com",
    databaseURL: "https://crwn-db-29df5.firebaseio.com",
    projectId: "crwn-db-29df5",
    storageBucket: "",
    messagingSenderId: "254045153384",
    appId: "1:254045153384:web:55638a7120da60b4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;