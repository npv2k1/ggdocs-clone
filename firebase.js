import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyCp699SnAF8GuIfK_t4fDSIu6GKqByJ9gM",
  authDomain: "ggdocs-cbc81.firebaseapp.com",
  projectId: "ggdocs-cbc81",
  storageBucket: "ggdocs-cbc81.appspot.com",
  messagingSenderId: "480640522921",
  appId: "1:480640522921:web:37daf0c4b1296a578527b8",
  measurementId: "G-BDJJFWGESX",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
