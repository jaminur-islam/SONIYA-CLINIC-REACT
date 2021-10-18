import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbaseConfig";

const authenticationInit = () =>{
  initializeApp(firebaseConfig)
}

export default authenticationInit;