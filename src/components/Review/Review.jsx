import React from 'react'
import Card from '../Card/Card'
import Preview from '../Preview/Preview'
import MessageCard from '../Card/MessageCard'
import left from "../../assets/left.png"
import right from "../../assets/right.png"
const Review = () => {
  return (
    <div className="flex justify-center">
    <div className='flex justify-around align-middle max-w-screen-2xl bg-slate-400 rounded-xl'>
        <div className="">

      <h1 className='mt-5 mb-5 font-mono text-4xl font-semibold text-center '>Our Reviews</h1>
      <div className="flex justify-center">
        <div className="flex m-4 align-middle">
          <button className=''><img src={left} alt="" className='w-10 h-10 pb-2 pl-2 pr-2 m-2 rounded-md hover:bg-slate-100 bg-slate-200'/></button>
        </div>
      <div className="flex justify-center align-middle">

      <MessageCard username="Ram_21"/>
      <MessageCard  username = "Sita_12"/>
      </div>
      <div className="flex m-4 align-middle">
        <button>
          <img src={right} alt="" className='w-10 h-10 pb-2 pl-2 pr-2 m-2 rounded-md hover:bg-slate-100 bg-slate-200' />
          </button>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Review
