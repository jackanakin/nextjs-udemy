import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "node:process";

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_DOMAIN,
  projectId: env.FIREBASE_PRJ_ID,
  storageBucket: env.FIREBASE_BUCKET,
  messagingSenderId: env.FIREBASE_SENDER,
  appId: env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
