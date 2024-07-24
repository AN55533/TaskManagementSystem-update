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
            
          <table  className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Task Id</th>
            <th className="py-2 px-4 bg-gray-200">Title</th>
            <th className="py-2 px-4 bg-gray-200">Status</th>
            <th className="py-2 px-4 bg-gray-200">Description</th>
            <th className="py-2 px-4 bg-gray-200">Assigned To</th>
            <th className="py-2 px-4 bg-gray-200">Due date</th>
            <th className="py-2 px-4 bg-gray-200">Action</th>
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
             <Link to={`/tasks/${task.taskId}`} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">View details</Link>
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


 