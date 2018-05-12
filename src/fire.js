
import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBWRp_ZgdTNVUEqUIYjCb1k386hsD9DT3Q",
    authDomain: "react-native-first-app-202302.firebaseapp.com",
    databaseURL: "https://react-native-first-app-202302.firebaseio.com",
    projectId: "react-native-first-app-202302",
    storageBucket: "react-native-first-app-202302.appspot.com",
    messagingSenderId: "158147597190"
  };

  firebase.initializeApp(config);
  export const ref = firebase.database().ref();
  export const auth = firebase.auth;
  export const provider = new
  firebase.auth.GoogleAuthProvider();