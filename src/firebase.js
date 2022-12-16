import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfcsyY8zbZsDDxDCZpAwEStFt6n9UPIOA",
  authDomain: "disney-plus-clone-cefaf.firebaseapp.com",
  projectId: "disney-plus-clone-cefaf",
  storageBucket: "disney-plus-clone-cefaf.appspot.com",
  messagingSenderId: "1069697226185",
  appId: "1:1069697226185:web:fb4b8884c6ed4e75428418",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
