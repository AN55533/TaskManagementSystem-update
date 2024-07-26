

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Form } from "react-router-dom"
import TaskButton from './components/TaskButton'
import TaskCards from './components/TaskCards'
import Index from './components/Index'
import Navbar from './components/Navbar'
import UserNavbar from "./components/UserNavbar"
import Homepage from "./pages/Homepage"
import MainLayout from "./layouts/MainLayout"
import Tasks from "./pages/Tasks"
import Addtask from "./pages/Addtask"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import TaskPage, { taskLoader } from "./pages/TaskPage"
import EditTaskPage from "./pages/EditTaskPage"
import Admindash from "./pages/Admindash"
import Userdash from "./pages/Userdash"
import Userhomepage from "./pages/Userhomepage"
import UserLayout from "./layouts/UserLayout"
import Frontpage from "./pages/Frontpage"
import Mytask from "./components/Mytask"
import MytaskPage from "./pages/MytaskPage"
import UsereditPage from "./pages/UsereditPage"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
      <Route path="/" element={<Frontpage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<MainLayout/>}/>
      <Route path="/admindash" element={<Admindash/>}/>
      <Route path="/userdash" element={<Userdash/>}/>
      <Route path="/home" element={<Homepage/>}/> 
      <Route path="/userhome" element={<Userhomepage/>}/> 
      <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/addtask" element={<Addtask />} />
        <Route path="/mytask" element={<MytaskPage/>}/>
        <Route path="/edit-task/:id" element={<EditTaskPage />} loader={taskLoader} />
         <Route path="/edit-task/user" element={<UsereditPage/>} loader={taskLoader}/>
        <Route path="/tasks/:id" element={<TaskPage />} loader={taskLoader} />
        

        
     

      
    
       
       
      
      
      
      
      
      </>
        
        )
        )                                                                                                                   
        return (
        <>
          {/* <Navbar />
      <Index />
      <TaskCards />
      <TaskButton /> */}

          < RouterProvider router={router} />
        </>
        )
}

        export default App
