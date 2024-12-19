import {Link  } from 'react-router-dom'
const SignUp = () => {
  return (

     <div className='text-center mt-52'>
      {/* <h2 className='font-mono text-3xl text-center'>Thank you for choosing Us</h2> */}
      <h1 className='mt-10 font-mono text-4xl font-bold'>Sign Up</h1>
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
            <button className='p-3 font-bold text-white bg-blue-500 rounded-xl'>submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
