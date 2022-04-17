// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEU6Xwkf_FbpIITQrEn0KEOcVGo_6mYq4",
  authDomain: "assignment-10-eee47.firebaseapp.com",
  projectId: "assignment-10-eee47",
  storageBucket: "assignment-10-eee47.appspot.com",
  messagingSenderId: "206574335351",
  appId: "1:206574335351:web:7bb91f1d863040a81b9d72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
