import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ecommerce-ui-be81a.firebaseapp.com",
  projectId: "ecommerce-ui-be81a",
  storageBucket: "ecommerce-ui-be81a.appspot.com",
  messagingSenderId: "452352115426",
  appId: "1:452352115426:web:29a522ab87e46416fd94bb",
  measurementId: "G-CLS0Z2V3DP",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

auth.languageCode = "en-GB"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { auth, db }
