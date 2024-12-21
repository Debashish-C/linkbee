// import React from 'react'
import { Link } from 'react-router'
import {useState} from "react";
import Notification from "../Notification/Notification.jsx";

const Login = () => {

    const [userid,setUserid] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {

    }
  return (
    <div className='mt-64 text-center'>
        {userid === '' ? <Notification message="fill all the input field" /> :'' }

        {password === '' ? <Notification message="fill all the input field" /> :'' }
      <h2 className='font-mono text-3xl text-center sm:text-5xl text-[2.5rem] sm:text-[3rem]'
      
      style={{
        "font-family": "DynaPuff, serif",
        "font-optical-sizing": "auto",
        "font-weight": 200,
        // "fontSize":"3rem",
        "font-style": "normal",
        "font-variation-settings":
          "wdth 200"
      }}
      > Welcome Back </h2>
      <div className="flex-col justify-center mt-10 align-middle">
        <div className="">
            <input type="text" onChange={(e) => {
                e.preventDefault();
                setUserid(e.target.value);
            }} placeholder='userid' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="">
            <input type="text" onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
            }} placeholder='password' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="mt-10">
            <button className='p-3 font-bold text-white bg-slate-800 rounded-xl'
            style={{
              "font-family": "DynaPuff, serif",
              "font-optical-sizing": "auto",
              "font-weight": 200,
              "fontSize":"20px",
              "font-style": "normal",
              "font-variation-settings":
                "wdth 200"
            }}
            >submit</button>
        </div>
        <h3 className='m-5 mb-72'>Don't have an account? <Link to="/signup" className='text-blue-900'>Sign Up</Link> here</h3>
      </div>
    </div>
  )
}

export default Login
