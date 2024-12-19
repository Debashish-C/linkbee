// import React from 'react'
import userImage from "../../assets/user.png"
const Preview = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="text-center bg-gray-200 border-2 border-black rounded-lg h-1/3 w-96">
        <div className="flex justify-center mt-10">
          <img src={userImage} alt="profile" className="w-20 h-20"/>
        </div>
        <div className="mt-2">
          <h2>Your Name</h2>
        </div>
        <div className="mt-2">
          <p className="font-thin from-neutral-400">
            write a letest about what is going to show your thoughts
          </p>
        </div>
        <div className="flex justify-between p-2 m-4 font-bold text-center bg-gray-200 border-2 border-black rounded-xl">
          <div className="ml-2">
            <h2>logo</h2>
          </div>
          <div className="w-fit">Portfolio Website</div>
          <div className="mr-2">
            <h2>Go</h2>
          </div>
        </div>
        <div className="flex justify-between p-2 m-4 font-bold text-center bg-gray-200 border-2 border-black rounded-xl">
          <div className="ml-2">
            <h2>logo</h2>
          </div>
          <div className="w-fit">LinkedIn</div>
          <div className="mr-2">
            <h2>Go</h2>
          </div>
        </div>
        <div className="flex justify-between p-2 m-4 font-bold text-center bg-gray-200 border-2 border-black rounded-xl">
          <div className="ml-2">
            <h2>logo</h2>
          </div>
          <div className="w-fit">Instagram</div>
          <div className="mr-2">
            <h2>Go</h2>
          </div>
        </div>
        <div className="flex justify-between p-2 m-4 mb-5 font-bold text-center bg-gray-200 border-2 border-black rounded-xl">
          <div className="ml-2">
            <h2>logo</h2>
          </div>
          <div className="w-fit">twitter</div>
          <div className="mr-2">
            <h2>Go</h2>
          </div>
        </div>
        <button className="p-4 mb-5 font-bold text-white bg-gray-500 rounded-xl">Share</button>
      </div>
    </div>
  );
};

export default Preview;
