import React from 'react'
import Navbar from '../components/Navbar'
import Index from '../components/Index'
import TaskCards from '../components/TaskCards'
import TaskButton from '../components/TaskButton'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Index/>
        <TaskCards isHome= {true}/>
        <TaskButton/>
    </>
  )
}

export default Homepage