import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link , useHistory , useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {



  const {createUserWithEmailAndPassword , auth , user , setUser, updateProfile} = useAuth();

  // Name state 
  const [name , setName] = useState(' ');

  // email state
  const [email , setEmail] = useState(' ');
  // password state
  const [pass , setPass] = useState(' ');


  // Name 
  const getName = (e) =>{
    setName(e.target.value)
  }

  // email
  const getEmail = (e) =>{
   setEmail(e.target.value)
  }

  // pass 
  const getPass = (e) =>{
    setPass(e.target.value);
  }

  const histori = useHistory();
  
  
  const getValue = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth ,email , pass)
    .then((userCredential)=>{
      upDateProfile();
        histori.push('/home')
        window.location.reload()
    })
  }
   
  
 
  
  const upDateProfile = () =>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(()=>{
    })
  }
 

  return (
  
      <div className='login-section'>
      <h2 className='text-center text-primary'>Sign up </h2>
      <hr style={{width: '150px' , margin: '0 auto'}} />

  <Form onSubmit={getValue} className='container w-75 mt-2'>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={getName} type="text" placeholder="Your name" required />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  onBlur={getEmail}  type="email" placeholder="Enter email" />
    </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={getPass} type="password" placeholder="Password" />
  </Form.Group>
  
 <Button className='btn btn-primary' type="submit">
    SignUp
  </Button>
  
  
  <Link to='/login' className='text-decoration-none ms-1'> Have a account? </Link>
  <br />
</Form>
    </div>
  );
};

export default SignUp;