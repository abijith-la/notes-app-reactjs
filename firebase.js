
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3_R92mVK_JANRVtXkOug81N2pP5DWGic",
  authDomain: "notes--react.firebaseapp.com",
  projectId: "notes--react",
  storageBucket: "notes--react.appspot.com",
  messagingSenderId: "531596397625",
  appId: "1:531596397625:web:8a919a5688683a8eef91e8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")