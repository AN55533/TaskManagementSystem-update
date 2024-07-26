import React from 'react'



const Front = () => {
  return (

    
   
    
    <div className="container mx-auto mt-8 h-[810px] "  >
    {/* <!-- <img  src="task.png" className="w-full object-contain"   > --> */}
        <div className=" p-3 rounded " >
            
                  <h1 className="text-3xl font-bold mb-4 text-white ">Welcome to the Enhanced Task Management System</h1>
            <p className="text-white font-bold">Manage your tasks efficiently and effectively with our system. Get started by logging in or signing up.</p>
            <div className="mt-6">
                <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Login</a>
                <a href="/signup" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Sign Up</a>
                
            </div>
        </div>
    </div>


  )
}

export default Front