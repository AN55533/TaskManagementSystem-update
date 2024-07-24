import React from 'react'
import UserNavbar from '../components/UserNavbar';
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import Userhomepage from '../pages/Userhomepage';
import 'react-toastify/dist/ReactToastify.css';

const UserLayout = () => {
  return (
    <>
        <UserNavbar/>
        <Userhomepage/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default UserLayout