import React from 'react';
import { useHistory } from 'react-router';
import img from '../../header-img/confirm.png'

const Confrim = () => {

  const history = useHistory();
  const backHome = () =>{
     history.push('/home')
  }
  return (
    <div className='text-center overflow-hidden'>
       <img src={img} alt="" />
      <br />
       <button onClick={backHome} className='btn btn-success mt-2 px-5'> Back to home </button>
    </div>
  );
};

export default Confrim;