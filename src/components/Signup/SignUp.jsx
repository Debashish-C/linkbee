// import {Link  } from 'react-router-dom'
import {useDispatch, useStore} from "react-redux";
import {user} from "../../features/UserSlice.js";
import {useState} from "react";
import Notification from "../Notification/Notification.jsx";
const SignUp = () => {

    const [users, setUsers] = useState({});
    const  store = useStore();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userid, setUserid] = useState("");
    const handleSignUp = () => {
        // console.log(store.getState());


        setUsers({
            userid,
            email,
            password,
        });
        // console.log(users);
        dispatch(user(users))
        console.log(store.getState());
    }
  return (

     <div className='text-center mt-52'>
      {/* <h2 className='font-mono text-3xl text-center'>Thank you for choosing Us</h2> */}
         {(email === "") ? <Notification message="Please fill all the input field." /> : ""}
         {userid === "" ? <Notification message="Please fill all the input field" /> : ""}
         {password === "" ? <Notification message="please fill all the input field" /> : ""}
      <h1 className='mt-10'
      style={{
        "font-family": "DynaPuff, serif",
        "font-optical-sizing": "auto",
        "font-weight": 200,
        "fontSize":"3.5rem",
        "font-style": "normal",
        "font-variation-settings":
          "width 200"
      }}
      >Sign Up</h1>
         {/*<Notification/>*/}
      <div className="flex-col justify-center mt-10 align-middle">
        <div className="">
            <input type="text" placeholder='Name' className='p-3 m-2 rounded-lg w-72 bg-slate-200' id='name'/>
        </div>
        <div className="">
            <input type="email" placeholder='email' onChange={(e) =>{e.preventDefault()
            setEmail(e.target.value)
            }} className='p-3 m-2 rounded-lg w-72 bg-slate-200' id='email'/>
        </div>
        <div className="">
            <input type="text" placeholder='userid' onChange={(e) => {
                e.preventDefault();
                setUserid(e.target.value)
            }} className='p-3 m-2 rounded-lg w-72 bg-slate-200' id='userid'/>
        </div>
        <div className="">
            <input type="password" onChange={
                (e) =>{
                    e.preventDefault();
                    setPassword(e.target.value)
                }
            } placeholder='password' className='p-3 m-2 rounded-lg w-72 bg-slate-200' id='password'/>
        </div>
        <div className="mt-10 mb-64">
            <button className='p-3 font-semibold text-white border-2 border-black shadow-2xl bg-slate-900 hover:bg-slate-600 rounded-xl'
            style={{
              "font-family": "DynaPuff, serif",
              "font-optical-sizing": "auto",
              "font-weight": 800,
              "fontSize":"22px",
              "font-style": "normal",
              "font-variation-settings":
                "wdth 200"
            }} onClick={handleSignUp}>submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
