import React from 'react'
import Userdashboard from '../components/Userdashboard'
import UserNavbar from '../components/UserNavbar'

import Index from '../components/Index'


const Userdash = () => {
  return (
    <>
      <UserNavbar />
      <Index/>
      <Userdashboard />
      {/* <TaskCards  isUserhome= {true}/> */}
</>
  )
}

export default Userdash