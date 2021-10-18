import authenticationInit from "../firebase/firebase.init";
import {signUwe, createUserWithEmailAndPassword, signOut, getAuth, signInWithPopup, GithubAuthProvider , signInWithEmailAndPassword,GoogleAuthProvider , onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
authenticationInit();


// auth 
const auth = getAuth();

// googleProvider 
const googleProvider = new GoogleAuthProvider();

// githubProvider
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  // user state
  const [user , setUser] = useState({}); 

  // Error state
  const [error , setError] = useState('');

  // Google
  const handleGoogle = () =>{
  return  signInWithPopup(auth , googleProvider)
  }

  
  const handleGithub = () =>{
  return  signInWithPopup(auth , githubProvider)
   
  }

// sign Out  
   const logOut = () =>{
     signOut(auth)
     .then(()=>{
       setUser({})
     })
   }

  
  useEffect(()=>{
 const unsubscribed =  onAuthStateChanged(auth , (user)=>{
      if(user){
        setUser(user)
      }else {
        setUser({})
      }
    })

    return ()=> unsubscribed;
  },[])

return {handleGithub , handleGoogle , user , error ,logOut , auth ,signInWithEmailAndPassword, createUserWithEmailAndPassword , }
};

export default useFirebase;

