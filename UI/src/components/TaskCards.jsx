import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import React from 'react'
import TaskCard from '../components/TaskCard'

const TaskCards = () => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
  
        const fetchtask = async () => {
            try {
                const res = await fetch('/api/tasks');
                const data = await res.json()
                setTask(data)
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchtask()
    }, [])

 
    
    return (
        <>
            <h1 className='text-center text-2xl text-blue-500 mt-20 font-bold'>TASK DETAILS</h1>
          <table  className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-700 text-white">Task Id</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Title</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Status</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Description</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Assigned To</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Due date</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
            <td className="border px-4 py-2">{task.taskId}</td>
              <td className="border px-4 py-2">{task.title}</td>
                   <td className="border px-4 py-2">{task.status}</td>
                  <td className="border px-4 py-2">{task.description}</td>
                   <td className="border px-4 py-2">{task.assignedto}</td>
              <td className="border px-4 py-2">{task.duedate}</td>
              <td className="border px-4 py-3">
             <Link to={`/tasks/${task.taskId}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 self-start mx-5">View details</Link>
         {/* <button class="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
         <button class="bg-red-500 text-white px-2 py-1 rounded">Delete</button> */}
         
        
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}


export default TaskCards


 