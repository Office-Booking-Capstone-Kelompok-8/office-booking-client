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
              <div className='dasboard' id='dasboard'>
                <h1>Dashboard</h1>
              </div>
            </div>
            </div>
      </div>
  )
}

export default Dashboard