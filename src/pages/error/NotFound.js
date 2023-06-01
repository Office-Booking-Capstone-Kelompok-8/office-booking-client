import React from 'react'
import notfound from './../.././assets/img/404.png';

const NotFound = () => {
  return (
    <div className='container'>     
      <div className='justify-content-center pt-5'>
        <img src={notfound}  
          className="mx-auto d-block pt-5" 
          alt="notfound"
          style={{width: 600}}
        />
        <h3 className='text-gray-dark text-md text-center pt-2'>Sorry, the page you are looking for doesn’t exist or has been moved.</h3>
      </div>   
    </div>
  )
}

export default NotFound