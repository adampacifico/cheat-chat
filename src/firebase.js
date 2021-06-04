import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAbuw4p7dIDx1IGAIX0J2oWgZbBSyZkTek",
    authDomain: "cheatchat-app.firebaseapp.com",
    projectId: "cheatchat-app",
    storageBucket: "cheatchat-app.appspot.com",
    messagingSenderId: "197596849023",
    appId: "1:197596849023:web:44c920ac4ac3bd1810704a",
  })
  .auth();
