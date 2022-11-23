import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from './sidebar/Header'

const Dashboard = () => {
  return (
      <div>
          <div className='main-container d-flex'>
            <Sidebar />
            <div>
              <Header/>
              <div className='container-fluid pt-3' id='dasboard'>
                <h3 className='text-lg'>Dashboard</h3>
              </div>
            </div>
            </div>
      </div>
  )
}

export default Dashboard