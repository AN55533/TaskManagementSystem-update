import React from 'react'

const Front = () => {
  return (

    
   
    <body    class="bg-gray-100" >
    <div class="container mx-auto mt-8"  >
    {/* <!-- <img  src="task.png" class="w-full object-contain"   > --> */}
        <div class="bg-white p-6 rounded shadow" >
            
                  <h1 class="text-3xl font-bold mb-4">Welcome to the Enhanced Task Management System</h1>
            <p class="text-gray-700">Manage your tasks efficiently and effectively with our system. Get started by logging in or signing up.</p>
            <div class="mt-6">
                <a href="/login" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Login</a>
                <a href="/signup" class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Sign Up</a>
                
            </div>
        </div>
    </div>

</body>
  )
}

export default Front