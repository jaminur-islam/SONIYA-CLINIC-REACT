import React from 'react';
import { useHistory } from 'react-router';
import img from '../../header-img/error.jpg'

const Error = () => {
const history = useHistory()
const handleing = () =>{
       history.push('/home')
}

  return (
    <div>     
    <div>
      <img src={img} alt="" width='100%' height='530' />
    </div>

<div className='text-center'>   
<button className='btn btn-primary px-5 mt-3 my-4 d-inline-block ' onClick={handleing}> Back to home </button>
</div>
</div>
  );
};

export default Error;