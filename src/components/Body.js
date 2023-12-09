import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {

  return (
    <>
      <div>
        <Header />
      </div>

      <div className='flex'>
        <Sidebar />
        {/* <MainContainer /> */}
        <Outlet />
      </div>
    </>

  )
}

export default Body
