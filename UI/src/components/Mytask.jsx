import React, { useState, useEffect } from 'react';
import { Link,  useParams } from "react-router-dom";

const Mytask = () => {
    const [loginuser, setLoginuser] = useState({});
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [taskStatusFilter, setTaskStatusFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const {id} =useParams()

    // Fetch tasks from API
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('/api/tasks');
                const data = await res.json();
                setTasks(data);
                console.log(data,"task from api")
                setFilteredTasks(data); // Initialize filtered tasks with all tasks
            } catch (error) {
                console.log('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    // Fetch login user data from API
    useEffect(() => {
        const fetchLoginUser = async () => {
            try {
                const res = await fetch('/api/loginuser'); // Adjust this URL as per your backend endpoint
                const data = await res.json();
                setLoginuser(data);
                console.log(data,"user")
            } catch (error) {
                console.log('Error fetching login user:', error);
            }
        };
        fetchLoginUser();
    }, []);

    // Filter tasks based on status filter and search term
    useEffect(() => {
        const filterTasks = () => {
            let filtered = tasks.filter(task => {
                if (taskStatusFilter !== 'all' && task.status !== taskStatusFilter) {
                    return false;
                }
                if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return false;
                }
                return true;
            });
            setFilteredTasks(filtered);
        };
        filterTasks();
    }, [tasks, taskStatusFilter, searchTerm]);

    // Handle status filter change
    const handleStatusChange = (e) => {
        setTaskStatusFilter(e.target.value);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Clear filters and search term
    const clearFilters = () => {
        setTaskStatusFilter('all');
        setSearchTerm('');
    };

    // Delete a task
    const deleteTask = async (taskId) => {
        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                // Remove the deleted task from tasks and filteredTasks
                const updatedTasks = tasks.filter(task => task._id !== taskId);
                setTasks(updatedTasks);
                setFilteredTasks(updatedTasks);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Filter and Search */}
            <div className="mb-6 flex justify-between items-center">
                {/* Filtering Options */}
                <div className="space-x-4">
                    <label htmlFor="taskStatus" className="font-bold">Filter by Status:</label>
                    <select id="taskStatus" className="border rounded py-2 px-3" value={taskStatusFilter} onChange={handleStatusChange}>
                        <option value="all">All</option>
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
               
                <div>
                    <label htmlFor="taskSearch" className="font-bold">Search:</label>
                    <input type="text" id="taskSearch" className="border rounded py-2 px-3" placeholder="Search tasks..." value={searchTerm} onChange={handleSearchChange} />
                
               
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-4" onClick={clearFilters}>Cancel</button>
            </div>
                </div>

            <h3 className="text-xl font-bold mb-4">My Tasks</h3>

           
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Task Title</th>
                            <th className="py-2 px-4 bg-gray-200">Status</th>
                            <th className="py-2 px-4 bg-gray-200">Due Date</th>
                            <th className="py-2 px-4 bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map(task => (
                            <tr key={task._id}>
                                <td className="border px-4 py-2">{task.title}</td>
                                <td className="border px-4 py-2">{task.status}</td>
                                <td className="border px-4 py-2">{task.duedate}</td>
                                <td className="border px-4 py-3">
                                    <Link to={`/edit-task/user`}  className="bg-green-500 text-white px-2 py-1 rounded">Edit</Link>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const taskLoader = async ({ params }) => {
  const res = await fetch(`/api/tasks/${params.id}`);
  const data = await res.json();
  return data;
};



export { Mytask as default, taskLoader };
