import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2LAe_XnlGYIZbVc3AoDfvYP6APwFMxt0",
  authDomain: "crwn-db-fd0b2.firebaseapp.com",
  databaseURL: "https://crwn-db-fd0b2.firebaseio.com",
  projectId: "crwn-db-fd0b2",
  storageBucket: "",
  messagingSenderId: "1099202970860",
  appId: "1:1099202970860:web:94541dcf5bf091c32e91c9",
  measurementId: "G-2YRXL3TJ69"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;