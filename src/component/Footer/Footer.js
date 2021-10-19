import React from 'react';

const Footer = () => {
  return (
    <div className='bg-dark text-white py-2' id='contact'>    
     
    <footer className='container'>
    <div className='text-left mb-4 mx-auto'>
    <i className="fas fa-clinic-medical fs-1 text-white"></i> <span className='fw-bold text-white'>SONIA CLINIC</span>
      </div>    
      <div className="row">  

      <div className='col-lg-4 col-md-6 col-12'> 
      <div>           
       <h5> Our Hosptial Information</h5>
        <ul>
        <i className="far fa-envelope fs-3 mt-3"></i>  <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="#"> info@gmail.com</a> </li>
        <br />
        <i className="fas fa-mobile-alt fs-2"></i>  <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="">001-123 345 7800</a> </li>
        <br />
        <i className="fas fa-map-marker-alt fs-2"></i> <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="">LLC dhaka Road 12</a>  </li>
        </ul>
        </div> 
        </div>

      <div className='col-lg-4 col-md-6 col-12'> 
      <div>           
       <h5 className='ms-5'> Quick link </h5>
        <ul >
         <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="#service"> Services </a> </li>
        <br />
        <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="#medicine"> Medicine </a> </li>
        <br />
         <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="#about">About </a>  </li>
        
        <br />
         <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="#home">Contact  </a>  </li>
         </ul>
        </div> 
        </div>

      <div className='col-lg-4 col-md-6 col-12'> 
      <div>           
       <h5 className='ms-5'> Community </h5>
        <ul >
         <li className='nav-link d-inline-block '> <a className=' text-decoration-none' href="#"> community control</a> </li>
        <br />
        <li className='nav-link d-inline-block'> <a className='text-decoration-none' href=""> Support </a> </li>
        <br />
         <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="">Help </a>  </li>
        
        <br />
         <li className='nav-link d-inline-block'> <a className='text-decoration-none' href="">Setting </a>  </li>
         </ul>
        </div> 
        </div>

        </div>
        <div className='text-center'>
          <span > <i className="fab fs-3 rounded-circle fa-facebook-square"/> </span>
          <span > <i className="fab fs-3 rounded-circle fa-google-plus-square"/> </span>
          <span > <i className="fab fs-3 rounded-circlefab fa-linkedin"/> </span>
          <span > <i className="fab fs-3 rounded-circlefab fa-instagram-square"/> </span>
          
  
        </div>
        <p className='text-center mt-3'>	Copyright &copy;   2021.</p>
    </footer>
    </div>
  );
};

export default Footer;