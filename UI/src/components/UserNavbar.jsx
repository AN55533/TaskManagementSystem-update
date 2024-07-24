import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'
const UserNavbar = () => {
  return (
    <>
    
    <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div className='flex items-center'>
        </div>
        <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
          {/* <Link to="/home" className='ml-20'>Home</Link> */}
          <Link to="/userdash" className='ml-20'>User Dashboard</Link>
          <Link to="/mytask" className='ml-20'>My Tasks</Link>
          <Link to="/profile" className='ml-20'>Profile</Link>
          <Logout/>

        </div>
      </div>
    
    
    
    
    </>
  
  )
}

export default UserNavbar