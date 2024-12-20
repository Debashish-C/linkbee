// import {Link  } from 'react-router-dom'
const SignUp = () => {
  return (

     <div className='text-center mt-52'>
      {/* <h2 className='font-mono text-3xl text-center'>Thank you for choosing Us</h2> */}
      <h1 className='mt-10'
      style={{
        "font-family": "DynaPuff, serif",
        "font-optical-sizing": "auto",
        "font-weight": 200,
        "fontSize":"3.5rem",
        "font-style": "normal",
        "font-variation-settings":
          "wdth 200"
      }}
      >Sign Up</h1>
      <div className="flex-col justify-center mt-10 align-middle">
        <div className="">
            <input type="text" placeholder='Name' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="">
            <input type="email" placeholder='password' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="">
            <input type="text" placeholder='userid' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="">
            <input type="password" placeholder='password' className='p-3 m-2 rounded-lg w-72 bg-slate-200'/>
        </div>
        <div className="mt-10 mb-64">
            <button className='p-3 font-semibold text-white border-2 border-black shadow-2xl bg-slate-900 hover:bg-slate-600 rounded-xl'
            style={{
              "font-family": "DynaPuff, serif",
              "font-optical-sizing": "auto",
              "font-weight": 800,
              "fontSize":"22px",
              "font-style": "normal",
              "font-variation-settings":
                "wdth 200"
            }}>submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
