import React from 'react'
import userImg from "../../assets/user.png"
const MessageCard = (props) => {
  return (
    <div className='p-5 m-5 h-52 w-96 bg-slate-200 rounded-xl'>
      <div className="flex justify-start align-middle">
        <img src={userImg} alt="img" className='w-10 h-10'/>
        <h1 className='pt-2 pl-3'>{props.username}</h1>
      </div>
      <div className="pt-4">
        <p>great platform to share all our social at once, i am using it and sharing my profile around the world</p>
      </div>
    </div>
  )
}

export default MessageCard
