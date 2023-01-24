import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import bg from "../image/Sign in-pana.svg"


const UserLogin = () => {
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(userlogin);

  const onHandleChange = (e) => {
    const data = { ...userlogin };
    data[e.target.name] = e.target.value;
    setUserLogin(data);
  };

  // handle login api
  const handleApi = async () => {
    const getdata = {
      email: userlogin.email,
      password: userlogin.password,
    };
    if(!(userlogin.email || userlogin.password)){
      toast("please fill the details")
    }else{
      const loginRoute = await axios.post("/login", getdata)
      .then((res)=>{
       setUserLogin(res);
      })
      .catch((err)=>{
        console.log(err);
      })
      toast("login successfull")
      navigate("/home");
    }
    }

  const onHandlesubmite = (e) => {
    e.preventDefault();
    handleApi();
    setUserLogin("")
  };

  return (
    <div className="flex w-full h-full">
     <div className="w-1/2 p-[5rem]">
    <img className="h-full w-full" src={bg} alt="" />
    </div>
    <div className="w-1/2 p-6 h-full">
    <h1 className="text-center p-10 font-bold text-xl">Sign in </h1>
    <div className="w-full mt-10 flex items-center justify-center">
      <form onSubmit={onHandlesubmite}>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control
        block
        w-full
        px-8
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={userlogin.email}
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control block
        w-full
        px-8
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
            value={userlogin.password}
            onChange={onHandleChange}
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-8
      py-2.5
      bg-[#4A75D7]
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign in
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Not a member?
          <NavLink
            to="/"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Register
          </NavLink>
        </p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default UserLogin;
