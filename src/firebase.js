import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6Xb-mcl0K7P8fDP8Qs3OuVdUWkfV7VtY",
    authDomain: "clone-5878d.firebaseapp.com",
    databaseURL: "https://clone-5878d.firebaseio.com",
    projectId: "clone-5878d",
    storageBucket: "clone-5878d.appspot.com",
    messagingSenderId: "298458127482",
    appId: "1:298458127482:web:f3b3fd78681e120cce6fc3",
    measurementId: "G-PVFTD5HDP5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
