import React from 'react'
import UserNavbar from '../components/UserNavbar'
import Index from '../components/Index'
import TaskCards from '../components/TaskCards'
import TaskButton from '../components/TaskButton'

const Userhomepage = () => {
  return (
    <>
    <UserNavbar/>
    <Index/>
    <TaskCards  isUserhome= {true}/>
    <TaskButton/>
    </>
  )
}

export default Userhomepage