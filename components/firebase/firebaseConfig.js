import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCSHnhWbgA8_2qmb-ztAwn9SUXe15jORDY",
    authDomain: "website-5e86c.firebaseapp.com",
    projectId: "website-5e86c",
    storageBucket: "website-5e86c.appspot.com",
    messagingSenderId: "526482611614",
    appId: "1:526482611614:web:19c5dfc4deaee176158a8f",
    measurementId: "G-G9ZZM6X3X1"
  };
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;