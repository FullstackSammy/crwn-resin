// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc, // Needed to get a document instance
  getDoc, // getting the data on that doc instance
  setDoc, // setting the data on that doc instance
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi0oKv42n7isYzscBKtK2SvbyxpGa3opw", // Not important that it is shown. Read the firebase documentation for more info.
  authDomain: "crwn-resin-db.firebaseapp.com",
  projectId: "crwn-resin-db",
  storageBucket: "crwn-resin-db.appspot.com",
  messagingSenderId: "1014700222801",
  appId: "1:1014700222801:web:b849788ac88f0db68d0b70",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account", // Varje gång någon interactar med våran providet så måste de alltid välja ett account.
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // Made a database instance

export const createUserDocumentFromAuth = async (userAuth) => {
  // doc tar tre arguments. database, collection name, och en identifier
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
