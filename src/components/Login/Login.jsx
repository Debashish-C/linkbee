// import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='mt-64 text-center'>
      <h2 className='font-mono text-5xl text-center'
      
      style={{
        "font-family": "DynaPuff, serif",
        "font-optical-sizing": "auto",
        "font-weight": 200,
        "fontSize":"3rem",
        "font-style": "normal",
        "font-variation-settings":
          "wdth 200"
      }}
      >~ Welcome Back ~</h2>
      <div className="flex-col justify-center mt-10 align-middle">
        <div className="">
            <input type="text" placeholder='userid' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="">
            <input type="text" placeholder='password' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
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
