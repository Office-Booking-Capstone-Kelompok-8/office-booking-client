import React from 'react'
import server from './../.././assets/img/505.png';

const ServerUnavailable = () => {
  return (
    <div className='container'>     
      <div className='justify-content-center pt-5'>
        <img src={server}  
          className="mx-auto d-block" 
          alt="notfound"
          style={{width: 500}}
        />
        <div className="d-flex justify-content-center pt-2">
            <button
              className="btn bg-primary text-white text-md me-5 px-5 py-2"
            >
              Refresh
            </button>
        </div>
      </div>  
    </div>
  )
}

export default ServerUnavailable