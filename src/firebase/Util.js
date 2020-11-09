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


firebase.auth().signOut().then(function() {
    console.log("Log Out is Successful")// Sign-out successful.
  }).catch(function(error) {
    console.log("Log Out Not Successful");
  });























 
