import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const authenticationInitialize = () => {
    initializeApp(firebaseConfig);
}
export default authenticationInitialize;