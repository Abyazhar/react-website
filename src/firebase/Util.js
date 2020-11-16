import { firebaseConfig } from './Config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//connect to firebase database:pass firebase config
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();//export 2 instances of auth, firestore 

//utility func to call on click event when signin is clicked
const GoogleProvider = new firebase.auth.GoogleAuthProvider(); //Can create custom provider for social media fb, github etc..
GoogleProvider.setCustomParameters({prompt:'select_account'});   
export const SignInWithGoogle = () => auth.signInWithPopup(GoogleProvider);


export const Logout = () => {
  firebase.auth().signOut().then(function() {
    console.log("Log Out is Successful")// Sign-out successful.
  }).catch(function(error) {
    console.log("Log Out Not Successful");
  });
}

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData
      });
    } catch(err) {
      console.log("Error");
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}
























 
