import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const FormAdd = () => {
  const [taskId,setTaskId] =useState('')
  const [title,setTitle] =useState('')
  
  const [assignedto,setAssignedto]= useState('')
  const [description,setDescription]= useState('')
  const [status, setStatus] = useState('')
  const [duedate,setDuedate]= useState('')
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    const fetchuser = async () => {
        try {
            const res = await fetch('/api/users');
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log('error', error)
        }
    };
    fetchuser()
},[])




  const navigate=useNavigate()
  
  const submitForm=(e) => {
    e.preventDefault()
    const newTask={
      title,
      taskId,
      assignedto,
      description,
      status,
     duedate}
  
    addTaskSubmit(newTask)
    toast.success('task added')
    navigate('/tasks')

  }
  
  const addTaskSubmit=async (newTask) => {
    const res =await fetch ('/api/tasks',
     { method :'POST',
      headers:{
        'Content-Type': "application/json"
      },
        body:JSON.stringify(newTask)
      })
    return res
  }
  
  return (
    <div>
        <section className="bg-white mb-20">
    <div className="container m-auto max-w-2xl py-2">
      <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      
        <form onSubmit={submitForm}>
          <h2 className="text-3xl text-blue-800 text-center font-semibold mb-6">
            Add Task
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="title"
              required
              
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Task Id
            </label>
            <input
              type="text"
              id="taskId"
              name="taskId"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="ID"
              required
              
              value={taskId}
              onChange={(e)=>setTaskId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="assignedto"
              className="block text-gray-700 font-bold mb-2"
            >
              AssignedTo
            </label>
            {/* <select
      id="assignedto"
      name="assignedto"
      className="border rounded w-full py-2 px-3"
      required
      value={assignedto}
      onChange={(e)=>setAssignedto(e.target.value)}
    >
      <option value="">Select a user</option>
      {username.map((user) => (
        <option key={user._id} value={user._id}>
          {user.username}
        </option>
      ))}
    </select> */}
        <select
  id="assignedto"
  name="assignedto"
  className="border rounded w-full py-2 px-3"
  required
  value={assignedto}
  onChange={(e) => setAssignedto(e.target.value)}
>
  <option value="">Select a user</option>
  {users.map((user) => (
    <option key={users.username} value={users.username}>
      {user.username}
    </option>
  ))}
</select>

          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small description on the task"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 font-bold mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="border rounded w-full py-2 px-3"
              required
              value={status}
              onChange={(e)=>setStatus(e.target.value)}
              
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
              </div>
              
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Due Date
            </label>
            <input
              type="date"
              id="duedate"
              name="duedate"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="date"
              required
              
              value={duedate}
              onChange={(e)=>setDuedate(e.target.value)}
            />
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
    </div>
  )
}

export default FormAdd