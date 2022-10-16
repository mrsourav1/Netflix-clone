// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBykAJv5MrlDzKEf3XtLWP3NRK6dhyc5mI",
    authDomain: "netflix-clone-e662a.firebaseapp.com",
    projectId: "netflix-clone-e662a",
    storageBucket: "netflix-clone-e662a.appspot.com",
    messagingSenderId: "931328889254",
    appId: "1:931328889254:web:769921bb2eaacf7c8d7f67"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;