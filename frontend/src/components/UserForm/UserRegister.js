import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import bg from "../image/Sign up-cuate.svg"


const UserRegister = () => {
  const navigate = useNavigate()  
  const [formvalue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const data = { ...formvalue };
    data[e.target.name] = e.target.value;
    setFormValue(data);
  };

  const handleApi = async () => {
   try {
     const data = {
       firstname: formvalue.firstname,
       lastname: formvalue.lastname,
       email: formvalue.email,
       password: String(formvalue.password)
     }
     if (!(formvalue.firstname && formvalue.lastname && formvalue.email && formvalue.password)) {
       toast("please fill the all details required")
     } else {
       let register = await axios
         .post(
           "/register", data
         )
       setFormValue(register)  
       toast("registration successfull")
       navigate("/login")
     }
   } catch (error) {
    console.log(error)
   }
    // setFormValue(register);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleApi();
    setFormValue("");
  };

  return (
    <div className="w-full h-full flex">
    <div className="w-1/2 p-[5rem] ">
    <img className="h-full w-full" src={bg} alt="" />
    </div>
    <div className="w-1/2 bg-white p-6">
    <h1 className="pt-10 text-center font-bold text-xl capitalize">Registration form</h1>

    <div className="mt-[7rem] w-full flex items-center justify-center">
      <form onSubmit={submitForm}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              name="firstname"
              className="form-control
          block
          w-full
          px-3
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
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="First name"
              value={formvalue.firstname}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="lastname"
              className="form-control
          block
          w-full
          px-3
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
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Last name"
              value={formvalue.lastname}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            name="email"
            className="form-control block
        w-full
        px-3
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
            id="exampleInput125"
            placeholder="Email address"
            value={formvalue.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="password"
            name="password"
            className="form-control block
        w-full
        px-3
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
            id="exampleInput126"
            placeholder="Password"
            value={formvalue.password}
            onChange={onChangeHandler}
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-6
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
          Sign up
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Already have a account ?{" "}
          <NavLink
            to="/login"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Sign In
          </NavLink>
        </p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default UserRegister;
