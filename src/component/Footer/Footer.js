import React from 'react';

const Footer = () => {
  return (
    <div className='bg-dark text-white py-2' id='contact'>          
    <footer className='container'>
      <div className="row">  

      <div className='col-lg-4 col-md-6 col-12'> 
      <div>           
       <h4> Our Hosptial Information</h4>
        <ul>
        <i className="far fa-envelope fs-3 mt-3"></i>  <li className='nav-link d-inline-block'> <a href="#"> info@gmail.com</a> </li>
        <br />
        <i className="fas fa-mobile-alt fs-2"></i>  <li className='nav-link d-inline-block'> <a href="">001-123 345 7800</a> </li>
        <br />
        <i className="fas fa-map-marker-alt fs-2"></i> <li className='nav-link d-inline-block'> <a href="">LLC dhaka Road 12</a>  </li>
        </ul>
        </div> 
        </div>

      <div className='col-lg-4 col-md-6 col-12'> 
      <div>           
       <h4 className='ms-5'> Quick link </h4>
        <ul >
         <li className='nav-link d-inline-block'> <a href="#"> Services </a> </li>
        <br />
        <li className='nav-link d-inline-block'> <a href=""> Medicine </a> </li>
        <br />
         <li className='nav-link d-inline-block'> <a href="">About </a>  </li>
        
        <br />
         <li className='nav-link d-inline-block'> <a href="">Contact  </a>  </li>
         </ul>
        </div> 
        </div>

        </div>
        <p>	&copy;</p>
    </footer>
    </div>
  );
};

export default Footer;