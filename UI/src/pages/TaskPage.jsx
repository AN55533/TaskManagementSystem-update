import React, { useEffect, useState } from "react";
import img1 from "../assets/images/taskimage.png";
import { Link, Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { userTypeLoader } from "./LoginPage";


const TaskPage = () => {

  const tasks = useLoaderData();
  const {id} =useParams()
  const navigate= useNavigate()
  const userType= userTypeLoader()

  const deleteTask =async () => {
    const confirm = window.confirm('delete?')
    if (!confirm) return;
    const res = await fetch (`/api/tasks/${id}`,
{method:'DELETE'}
    )
    navigate('/tasks')
  }
  return (
    <div>
      <div className="bg-white text-gray-900 mb-10 pb-10">
        <div className="max-w-4xl mx-auto p-5 ">
          <section>
            <a
              className="flex items-center my-5 gap-1 font-medium  "
              href="/tasks"
            >
              {" "}
              Back to Task
            </a>
          </section>

          <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
            <img
              src={img1}
              alt="Task Thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
               
              
                <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                Title 
                </h2>
                <p>{tasks.title}</p>
              </div>


                <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Assigned To
                </h2>
                <p>{tasks.assignedto}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Description
                </h2>
                <p>{tasks.description}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Status
                </h2>
                <p>{tasks.status}</p>
              </div>
              </div>
             
              
              

             
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-4 mr-[205px] ">
         { userType=='admin' &&
         <>
          <Link to={`/edit-task/${id}`} className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">
            Edit Task
          </Link>
          <a onClick={()=> deleteTask(id)} className="flex bg-red-500 hover:bg-red-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline  justify-center items-center">
            Remove Task
          </a>
         </>}
         
        </div>
      </div>
    </div>
  );
};
const taskLoader = async ({ params }) => {
  const res = await fetch(`/api/tasks/${params.id}`);
  const data = await res.json();
  return data;
};

// export default CoursePage;

export { TaskPage as default, taskLoader };
