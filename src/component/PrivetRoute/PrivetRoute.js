import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({children , ...rest}) => {
  const {user , loading } = useAuth();

   if(loading){
     return (
       <div className='container text-center mt-2'>     
      <div className="spinner-border text-success"  style={{width: '3rem' , height: '3rem'}} role="status">
      <p className="sr-only">Loading...</p>
      </div>
      </div>
     )
   }
  return (
    <Route
    {...rest}
    render={({ location }) =>
      user? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};

export default PrivetRoute;