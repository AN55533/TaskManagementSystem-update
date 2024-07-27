import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img1 from "../assets/images/img1.jpg";



const styles = {
  backgroundImage: `url(${img1})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  
}




const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
    email,
    password,
  };

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  // console.log(res, "login res from /login");
  if (res.ok) { 
    // console.log('/login resp json', data)
    const data =await res.json();
    const userType = data.userType;
    // console.log('usertype ', userType)
    if(data.userType==='user'){
      toast.success(`Logged in as : ${userType}`);
      return navigate("/userhome");
      }
      else if(data.userType==='admin'){
        toast.success(`Logged in as : ${userType}`);
        return navigate("/home");
      }

  } else {
    toast.error(`Please check your credentials`);
    return navigate("/login");
  }

}


















  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen"  style={styles}>
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          Login
        </h2>
        <form onSubmit={loginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
              <label
                htmlFor="userType"
                className="block text-gray-700 font-bold mb-2"
              >
                User Type
              </label>
              <select
                id="userType"
                name="userType"
                className="border rounded w-full py-2 px-3"
                required
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
     
              </select>
            </div>






          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Login
            </button>
            <Link to="#" className="text-purple-700 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


const userTypeLoader = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Authtoken"))
    ?.split("=")[1];
  console.log("document.cookie value", authToken);

  const decoded = jwtDecode(authToken);
  console.log("decoded", decoded);
  const userType = decoded.userType;
  console.log("usertype", userType);
  return userType;
};

export { LoginPage as default, userTypeLoader };

// export default LoginPage