import React from 'react'
import editImg from "../../assets/edit.png"
import dlete from "../../assets/navClose.png"
import github from "../../assets/github.png"
const LinkView = (props) => {
  return (
    <div>
      <div className="flex justify-around w-full pb-3 mt-4 align-middle rounded-lg bg-slate-400">
             <div className="flex justify-center p-1 mt-2 align-middle">
                {/* <select name="" id="" value={props.icon} defaultValue={props.icon} disabled className="font-mono font-bold bg-slate-400">
                    <option value="" className="">{props.icon}</option>
                    <option value="" className="">facebook</option>
                    <option value="" className="">instagram</option>
                    <option value="" className="">email</option>
                    <option value="" className="">linkedIn</option>
                </select> */}
                <img src={github} alt="" className='h-10 mt-2 '/> 
            </div> 
            <div className="flex justify-center align-middle">
                <input type="text" className="w-full p-2 mt-3 font-semibold text-center rounded-md outline-none md:w-72 sm:w-52 bg-slate-300" placeholder="enter the link" value={props.linked}/>
            </div>
            <div className="flex justify-center align-middle ">
                <button className="pr-3 mt-4 text-xl md:pl-3 sm:pl-2 font-bol bg-slate-000 "><img src={editImg} alt="" className='w-10 h-10' /></button>
            </div>
            <div className="flex justify-center align-middle ">
                <button className="p-1 pr-3 mt-4 text-xl rounded-lg md:pl-3 sm:pl-1 font-bol bg-slate-000 " onClick={() => props.remove(props.index)}>

                    <img src={dlete} alt="" className='w-10 h-10' />

                </button>
            </div>
        </div>
    </div>
  )
}

export default LinkView
