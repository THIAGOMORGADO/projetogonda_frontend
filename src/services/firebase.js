import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "AIzaSyC7rdtUQFpR9gpbx2zby_hop_6tzKZ_Ng4",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "auth-renatogonda.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID || "auth-renatogonda",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "auth-renatogonda.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "714565647426",
  appId: process.env.REACT_APP_APP_ID || "1:714565647426:web:e4511b7f9b0be0421181db",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};