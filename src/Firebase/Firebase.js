import * as firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrGAC2U_7gBPOJmdwz5dDPnrwHFuoLX8",
  authDomain: "ing-project-8f868.firebaseapp.com",
  databaseURL: "https://ing-project-8f868.firebaseio.com",
  projectId: "ing-project-8f868",
  storageBucket: "ing-project-8f868.appspot.com",
  messagingSenderId: "286316982269",
  appId: "1:286316982269:web:503af5f0ad2734f74f3394",
  measurementId: "G-P6Y0597E27",
};

firebase.initializeApp(firebaseConfig) ;

const storage = firebase.storage();

export {
  storage, firebase as default
}