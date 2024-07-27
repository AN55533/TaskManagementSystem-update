import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admindashboard = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  // Function to fetch task count from the API
  const fetchTaskCount = async () => {
    try {
      const response = await fetch('/api/tasks/count');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && typeof data.count === 'number') {
        setTaskCount(data.count);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching task count:', error);
    }
  };

  // Function to fetch user count from the API
  const fetchUserCount = async () => {
    try {
      const response = await fetch('/api/users/count');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && typeof data.count === 'number') {
        setUserCount(data.count);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };

  // Use effect hook to fetch data when component mounts
  useEffect(() => {
    fetchTaskCount();
    fetchUserCount();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-lg font-semibold mb-2">Tasks Overview</h2>
          <div className="mx-5 my-10">Total Tasks: {taskCount}</div>
          <Link to="/tasks" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">View All Tasks</Link>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-lg font-semibold mb-2">Users Overview</h2>
          <div className="mx-5 my-10">Total Tasks: {userCount}</div>
          <Link to="/tasks" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">View All Users</Link>
        </div>

        

        <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <div className="text-gray-600">Analytics data goes here...</div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
