import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLWom4AVmN4dQjqkti9rGUaHrLFDN2cfQ",
    authDomain: "complete-react-23445.firebaseapp.com",
    databaseURL: "https://complete-react-23445.firebaseio.com",
    projectId: "complete-react-23445",
    storageBucket: "complete-react-23445.appspot.com",
    messagingSenderId: "917719212069",
    appId: "1:917719212069:web:fb5f6f0d8f8e4dd9001fcc",
    measurementId: "G-5LZELCMRMR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;