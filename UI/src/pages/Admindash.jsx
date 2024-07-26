import React from 'react'
import Navbar from '../components/Navbar'
import Admindashboard from '../components/Admindashboard'
import TaskCards from '../components/TaskCards'

const Admindash = () => {
  return (
    <div>
      <Navbar/>
      < Admindashboard />
      <TaskCards/>
    </div>
  )
}

export default Admindash
