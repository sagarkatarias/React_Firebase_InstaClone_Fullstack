import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAV0xmNn0CF2YOl9ILW_lnmKxXxW3YndM0",
    authDomain: "fake-insta-ffa35.firebaseapp.com",
    databaseURL: "https://fake-insta-ffa35.firebaseio.com",
    projectId: "fake-insta-ffa35",
    storageBucket: "fake-insta-ffa35.appspot.com",
    messagingSenderId: "629697136743",
    appId: "1:629697136743:web:780ab3c106fa65347cacc2",
    measurementId: "G-98DNNSZR2C"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

