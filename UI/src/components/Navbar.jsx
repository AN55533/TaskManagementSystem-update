
import { Link } from 'react-router-dom'
import Logout from './Logout'
const Navbar= ()=>{
    return(
        <>
         <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div className='flex items-center'>
        </div>
        <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
          <Link to="/home" className='ml-20'>Home</Link>
          <Link to="/admindash" className='ml-20'>Admin Dashboard</Link>
          <Link to="/tasks" className='ml-20'>Tasks</Link>
          <Link to="/addtask" className='ml-20'>Add Task</Link>
          <Logout/>

        </div>
      </div>
        
        </>
    )
}
export default Navbar