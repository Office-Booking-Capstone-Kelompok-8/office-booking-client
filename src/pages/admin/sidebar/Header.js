import React from 'react'
import './Styles.css'
import Icon from '@mdi/react'
import { 
    mdiEmailOutline, mdiBellOutline } 
from '@mdi/js';

const Header = () => {
   
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <form className="d-flex justify-content-start ">
                    <input className="search form-control me-2" type="search" placeholder="text" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                <div className='user-wrapper'>
                    <Icon path={mdiBellOutline}
                        title="User Profile"
                        size={1}
                        className='icons'
                    />
                    <Icon path={mdiEmailOutline}
                        title="User Profile"
                        size={1}
                        className='icons m-3'
                    />
                    <img src=""  alt="user" className='m-3' />
                    <div>
                        <h4>John Noe</h4>
                        <small>Super admin</small>
                    </div>
                </div>
            </div>
        </nav>  
    </div>
  )
}

export default Header