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


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
   
    const snapShot = await userRef.get();

    if(!snapShot.exist) {
        
        const { displayName, email } = userAuth;
        const createAt= new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;