import authenticationInit from "../firebase/firebase.init";
import {signUwe, createUserWithEmailAndPassword, signOut, getAuth, signInWithPopup, GithubAuthProvider , signInWithEmailAndPassword,GoogleAuthProvider , onAuthStateChanged  , updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
authenticationInit();


// auth 
const auth = getAuth();

// googleProvider 
const googleProvider = new GoogleAuthProvider();

// githubProvider
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {

  const [loading, setLoading] = useState(true);

  // user state
  const [user , setUser] = useState(null); 

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
     setLoading(true);
     signOut(auth)
     .then(()=>{
       setUser(null)
     }).finally(()=>{
       setLoading(false);
     })
   }

  
  useEffect(()=>{
 const unsubscribed =  onAuthStateChanged(auth , (user)=>{
      if(user){
        setUser(user)
      }else {
        setUser(null)
      }

      setLoading(false);
    })

    return ()=> unsubscribed;
  },[])

return {handleGithub , handleGoogle , user , error ,logOut , auth ,signInWithEmailAndPassword, createUserWithEmailAndPassword , loading, setLoading , updateProfile , setUser }
};

export default useFirebase;

