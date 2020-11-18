import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAutL8_USMX_SrZwb--FywQMhMuMaEDr_4",
    authDomain: "vistrit-twitter.firebaseapp.com",
    databaseURL: "https://vistrit-twitter.firebaseio.com",
    projectId: "vistrit-twitter",
    storageBucket: "vistrit-twitter.appspot.com",
    messagingSenderId: "283101103422",
    appId: "1:283101103422:web:7bdece3e0a19e2e223586f",
    measurementId: "G-15W73EHBEV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;