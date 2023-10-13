import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeHaEqrLScazE-CyGBRX4i9sY5xv6LlSM",
  authDomain: "budgetmaster-india.firebaseapp.com",
  projectId: "budgetmaster-india",
  storageBucket: "budgetmaster-india.appspot.com",
  messagingSenderId: "980698119762",
  appId: "1:980698119762:web:03b45a9c967f9df5a9e98b",
  measurementId: "G-0VM2GMFPZF",
};
const app = initializeApp(firebaseConfig);

// export const Storage_Bucket = getStorage(app);
export const db = getFirestore(app);

// export const auth = getAuth(app);
