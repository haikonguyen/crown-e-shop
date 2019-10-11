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

/* This function allow us to data from userAuth object into our DB */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if our userAuth is null, return aka do nothing
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  /* 
    the exist is a prop from snapShot object and it 
    tells whether data is there or not 
  */

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
