import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

const EditTaskPage = () => {
  const tasks = useLoaderData();
  const [taskId, setTaskId] = useState(tasks.taskId);
  const [title, setTitle] = useState(tasks.title);
  const [assignedto, setAssignedto] = useState(tasks.assignedto);
  const [description, setDescription] = useState(tasks.description);
  const [status, setStatus] = useState(tasks.status);
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

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const updateTask = {
      title,
      taskId,
      assignedto,
      description,
      status,
    };

    updateTaskSubmit(updateTask);
    navigate(`/tasks/${taskId}`);
  };

  const updateTaskSubmit = async (updateTask) => {
    const res = await fetch(`/api/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    return res;
  };

  return (
    <div>
      <section class="bg-white mb-20">
        <div class="container m-auto max-w-2xl py-2">
          <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
                Edit Task
              </h2>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label
                  htmlFor="assignedto"
                  class="block text-gray-700 font-bold mb-2"
                >
                  AssignedTo
                </label>
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

              <div class="mb-4">
                <label
                  htmlFor="description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="mb-4">
                <label
                  htmlFor="type"
                  class="block text-gray-700 font-bold mb-2"
                >
                   Status
                </label>
                <select
                  id="status"
                  name="status"
                  class="border rounded w-full py-2 px-3"
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Todo">Todo</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
              </div>

              <div>
                <button
                  class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditTaskPage;
