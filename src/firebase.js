import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBDdlrhW4OCtge0OsL36ryPOGsoeZAbiQ",
    authDomain: "neighbourgoods-65f54.firebaseapp.com",
    projectId: "neighbourgoods-65f54",
    storageBucket: "neighbourgoods-65f54.appspot.com",
    messagingSenderId: "61322813181",
    appId: "1:61322813181:web:22c2a18d17d24fb862e894"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const cartCollectionRef = collection(firestore, "cart");

export { firestore, cartCollectionRef };
