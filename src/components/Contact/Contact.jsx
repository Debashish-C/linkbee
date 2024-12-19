// import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center mt-32 ">
    <div className="w-1/3 pt-10 mt-30 bg-slate-200 rounded-xl">
      <h2 className="text-5xl font-semibold text-center">
        ~ Send Us a Message ~
      </h2>
      <form action="" className="flex justify-center text-center ">
        <div className="flex-col m-10">
          <div className="">
            <input type="text" placeholder="name" className="p-2 m-2 rounded-md w-72 bg-slate-100" />
          </div>
          <div className="">
            <input type="email" placeholder="email" className="p-2 m-2 rounded-md w-72 bg-slate-100" />
          </div>
          <div className="">
            <textarea name="" id="" placeholder="message" className="p-2 m-2 rounded-md w-72 bg-slate-100"></textarea>
          </div>
          <div className="">
            <button type="submit" className="p-3 pl-5 pr-5 m-2 font-bold text-white bg-blue-500 rounded-lg">send</button>
          </div>
        </div>
        <div className="">
          <img src="" alt="img" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
