import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {

  const {createUserWithEmailAndPassword , auth , user} = useAuth();
  console.log(createUserWithEmailAndPassword)

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


  const getValue = (e) =>{
    e.preventDefault();
    console.log(email , pass , name);
    createUserWithEmailAndPassword(auth ,email , pass)
    .then((userCredential)=>{
      userCredential.user.displayName = name;
      console.log(userCredential.user)
    })
  }
  
const histori = useHistory();
  const goLogin = () =>{
       histori.push('/login')
  }

  return (
  
      <div className='login-section'>
      <h2 className='text-center text-primary'>Sign up </h2>
      <hr style={{width: '150px' , margin: '0 auto'}} />

  <Form onSubmit={getValue} className='container w-75 mt-2'>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={getName} type="text" placeholder="Your name" />
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
  
  
  <Link to='/login' className='text-decoration-none ms-4'> Have a account? </Link>
  <br />
</Form>
    </div>
  );
};

export default SignUp;