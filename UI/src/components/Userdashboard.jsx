import React from 'react'

const Userdashboard = () => {
  return (
    
       <div className="min-h-screen flex">
       
       
        
        <div className="flex-1 p-6">
            

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
               
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4 ">Total Tasks</h3>
                    <p className="text-3xl">15</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Completed Tasks</h3>
                    <p className="text-3xl">10</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Pending Tasks</h3>
                    <p className="text-3xl">5</p>
                </div>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Deadlines</h3>
                <ul>
                    <li className="mb-2">
                        <span className="font-bold">Task 1:</span> Due in 2 days
                    </li>
                    <li className="mb-2">
                        <span className="font-bold">Task 2:</span> Due in 5 days
                    </li>
                    <li>
                        <span className="font-bold">Task 3:</span> Due in 7 days
                    </li>
                </ul>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <ul>
                    <li className="mb-2">
                        <span className="font-bold">You completed "Task 1"</span> - 1 hour ago
                    </li>
                    <li className="mb-2">
                        <span className="font-bold">You were assigned "Task 2"</span> - 3 hours ago
                    </li>
                    <li>
                        <span className="font-bold">You commented on "Task 3"</span> - 5 hours ago
                    </li>
                </ul>
            </div>

{/*             
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">My Tasks</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Task Name</th>
                            <th className="py-2 px-4 bg-gray-200">Status</th>
                            <th className="py-2 px-4 bg-gray-200">Due Date</th>
                            <th className="py-2 px-4 bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Task 1</td>
                            <td className="border px-4 py-2">Completed</td>
                            <td className="border px-4 py-2">2024-07-10</td>
                            <td className="border px-4 py-2">
                                <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Task 2</td>
                            <td className="border px-4 py-2">Pending</td>
                            <td className="border px-4 py-2">2024-07-15</td>
                            <td className="border px-4 py-2">
                                <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div> */}
        </div>
    </div>
       
    
    
  )
}

export default Userdashboard
