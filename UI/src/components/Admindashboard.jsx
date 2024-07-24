import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";

const Admindashboard = () => {
  // const tasks = useLoaderData();
  // const [users, setUsers] = useState([]);
  // const [title,setTitle] =useState('')
  const [taskCount, setTaskCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchTaskCount = async () => {
      try {
        const response = await fetch('/api/tasks/count');
        const data = await response.json();
        setTaskCount(data.count);
      } catch (error) {
        console.error('Error fetching task count:', error);
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await fetch('/api/users/count'); // Adjust endpoint for user count
        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Adjust endpoint for fetching users
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchTaskCount();
    fetchUserCount();
    fetchUsers();
  }, []); // Empty dependency array ensures it runs once on component mount

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Tasks Overview</h2>
          <div className="mx-5 my-10">Total Tasks: {taskCount}</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Users Overview</h2>
          <div className="mx-5 my-10">Total Users: {userCount}</div>
          {/* <ul>
            {users.map((user) => (
              <li key={user._id}>{user.username}</li>
            ))}
          </ul> */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <div className="text-gray-600">Analytics data goes here...</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-lg font-semibold mb-4">Task List</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Assigned To</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td className="border border-gray-300 px-4 py-2">{tasks.title}</td> */}
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            {/* Add dynamic rendering of tasks here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admindashboard;
