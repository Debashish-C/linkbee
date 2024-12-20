import React from 'react'
import userImg from "../../assets/user.png"
const MessageCard = (props) => {
  return (
    <div className='p-5 m-5 h-52 w-96 bg-slate-200 rounded-xl'>
      <div className="flex justify-start align-middle">
        <img src={userImg} alt="img" className='w-10 h-10'/>
        <h1 className='pt-1 pl-3 '
        style={{
          "font-family": "DynaPuff, serif",
          "font-optical-sizing": "auto",
          "font-weight": 900,
          "fontSize":"20px",
          "font-style": "normal",
          "font-variation-settings":
            "wdth 100"
        }}
        >{props.username}</h1>
      </div>
      <div className="pt-4"
      style={{
        "font-family": "Sour Gummy, serif",
        "font-optical-sizing": "auto",
        "font-weight": 400,
        "font-style": "normal",
        "font-variation-settings":
          "wdth 100",
          "fontSize":"18px"
      }}
      >
        <p>great platform to share all our social at once, i am using it and sharing my profile around the world</p>
      </div>
    </div>
  )
}

export default MessageCard
