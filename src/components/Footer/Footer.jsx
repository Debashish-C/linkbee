// import React from 'react'
import github from "../../assets/github.png"
const Footer = () => {
  return (
    // <div className="flex justify-center align-middle">
    <div className='flex justify-between pt-4 pb-4 pr-10 mt-10 align-middle sm:flex-row bg-slate-300'>
      {/* <h1 className='pt-4 text-3xl font-bold text-center'>~ Our Community ~</h1> */}
       {/* <p className='p-2 font-mono font-bold text-center'>~ Start connecting with the world now ~</p>
      <p className='pb-2 font-thin text-center'>Designed and developed by <a href="" className='text-blue-800'>Dev</a></p>  */}
      <p className='p-2 m-2 text-center'>© 2024 All Rights Reserved,<a href="" className="p-1 text-blue-950 hover:text-red-600">SMTP</a></p>
      <div className="flex justify-center align-middle">
      <div className="flex-col justify-center">
          <h1 className='font-semibold text-center'>Our Community</h1>
          <div className="flex justify-between align-middle">
          <h1 className='p-2 hover:text-red-500'><a href="">Github</a></h1>
          <h1 className='p-2 hover:text-red-500'>
            <a href="">

            LinkedIn
            </a>
            </h1>
          <h1 className='p-2 hover:text-red-500'>
            <a href="">
            Instagram
            </a>
          </h1>
          <h1 className='p-2 hover:text-red-500'>
            <a href="">
            twitter
            </a>
            </h1>
          </div>
      </div>
      </div>
        <div className="">
          <a href="https://github.com/Debashish-C/linkbee">
            <img src={github} alt="" className="w-16 h-16"/>
          </a>
        </div>
    </div>
    // </div>
  )
}

export default Footer
