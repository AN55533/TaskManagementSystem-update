import React from 'react'
import Navbar from '../components/Navbar'
import Index from '../components/Index'
// import TaskCards from '../components/TaskCards'
// import TaskButton from '../components/TaskButton'
import Admindashboard from '../components/Admindashboard'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Index/>
       <Admindashboard/>
    </>
  )
}

export default Homepage