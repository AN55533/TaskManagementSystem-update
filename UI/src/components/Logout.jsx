import React from 'react'
import { useNavigate } from 'react-router-dom';



const Logout = () => {
    const navigate= useNavigate()
    const logout = async () => {
        try {
            const res = await fetch('/api/logout')
            if (res.ok){
                console.log("logout success");
                navigate ('/')
            }
        }catch (error){
            console.log("something went wrong");
        }
    }
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout