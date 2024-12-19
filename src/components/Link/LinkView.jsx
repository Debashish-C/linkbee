import React from 'react'

const LinkView = (props) => {
  return (
    <div>
      <div className="flex justify-around pb-3 mt-4 align-middle rounded-lg bg-slate-400">
            <div className="flex justify-center p-1 mt-2 align-middle">
                <select name="" id="" value={props.icon} defaultValue={props.icon} disabled className="font-mono font-bold bg-slate-400">
                    <option value="" className="">{props.icon}</option>
                    <option value="" className="">facebook</option>
                    <option value="" className="">instagram</option>
                    <option value="" className="">email</option>
                    <option value="" className="">linkedIn</option>
                </select>
                {/* <img src={props.icon} alt="" className='w-10 h-10 mt-2 '/> */}
            </div>
            <div className="flex justify-center">
                <input type="text" className="p-2 mt-3 font-semibold rounded-md outline-none w-72 bg-slate-300" placeholder="enter the link" value={props.linked}/>
            </div>
            <div className="flex justify-center m-2 align-middle ">
                <button className="p-1 pl-3 pr-3 mt-4 text-xl rounded-lg font-bol bg-slate-300 hover:bg-slate-900 hover:text-white">Edit</button>
            </div>
            <div className="flex justify-center m-2 align-middle ">
                <button className="p-1 pl-3 pr-3 mt-4 text-xl rounded-lg font-bol bg-slate-300 hover:bg-slate-900 hover:text-white" onClick={() => props.remove(props.index)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default LinkView
