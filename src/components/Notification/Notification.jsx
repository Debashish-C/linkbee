import React from 'react'

const Notification = (props) => {
    // console.log("Notification");
    return (
        <div className="absolute -z-20 top-20 right-0 h-[5rem] w-[15rem] rounded-xl m-4 border-amber-500 border-2 shadow-2xl text-center bg-cyan-800">
            <h1 className=" text-white p-3 text-[20px]"
                style={{
                    "font-family": "Mouse Memoirs,serif",
                    "font-weight": 400,
                    "font-style": "normal",
                }}
            >{props.message}</h1>
        </div>
        // alert({props.message})

    )
}
export default Notification
