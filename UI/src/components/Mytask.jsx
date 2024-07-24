import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'

const Mytask = () => {
     const [userType, setUserType] = useState("");
    const [tasks, setTask] = useState([]);


  

  const [viewOption, setViewOption] = useState('column'); 

  const handleChange = (e) => {
    setViewOption(e.target.value);
  };
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


      useEffect(() => {
  
    const fetchusertype = async () => {
        try {
            const res = await fetch('/api/usertype');
            const data = await res.json()
            setUserType(data)
        } catch (error) {
            console.log('error', error)
        }
    };
    fetchusertype()
      }, [])
    
    
    
  return (
   <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">My Tasks</h3>

          <div className="flex items-center mb-4">
      <span className="text-lg font-bold mr-4">Task View:</span>
      <div>
        <input
          type="radio"
          id="columnView"
          name="taskView"
          value="column"
          checked={viewOption === 'column'}
          onChange={handleChange}
        />
        <label htmlFor="columnView" className="ml-2 mr-4">
          Column
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="rowView"
          name="taskView"
          value="row"
          checked={viewOption === 'row'}
          onChange={handleChange}
        />
        <label htmlFor="rowView" className="ml-2">
          Row
        </label>
      </div>

      {/* Placeholder for tasks container (replace with actual tasks container) */}
      <div className={`tasks-container ${viewOption === 'column' ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {/* Tasks content */}
      </div>
    </div>
        <div className={`tasks-container ${viewOption === 'column' ? 'grid-cols-1' : 'grid-cols-2'}`}>
      <table  className="min-w-full bg-white">
        <thead>
          <tr>
                      <th className="py-2 px-4 bg-gray-200">Task Title</th>
                      <th className="py-2 px-4 bg-gray-200">Status</th>
            <th className="py-2 px-4 bg-gray-200">Duedate</th>
            {/* <th className="py-2 px-4 bg-gray-200">Due Date</th> */}
            <th className="py-2 px-4 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td className="border px-4 py-2">{task.title}</td>
                  <td className="border px-4 py-2">{task.status}</td>
                   <td className="border px-4 py-2">{task.assignedto}</td>
              {/* <td className="border px-4 py-2">{task.dueDate}</td> */}
              <td className="border px-4 py-3">
                     
         <button class="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
         <button class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
         
        
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>  
      {/* <button className="bg-blue-500 text-white px-2 py-1 rounded mt-4" onClick={handleAddTask}>Add Task</button> */}
    </div>
  )
}

export default Mytask