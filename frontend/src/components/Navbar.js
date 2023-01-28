import React from "react";
import { Link } from "react-scroll";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';


const Navbar = () => {
  const [logout,setLogOut] = useState(false);
  const Navigate = useNavigate()

  const userLogOut = () =>{
     const res = axios.get("/logOut")
     .then((resdata)=>{
      setLogOut(resdata)
      console.log(resdata)
     })
     .catch((err)=>{
      console.log(err);
     })
     Navigate("/")
     toast("user successfully logged Out")
  }


  return (
    <div className="w-[20rem] h-screen bg-[#4338CA] text-white fixed">
      <button onClick={()=>userLogOut(true)}>LogOut</button>
      <ul className="flex items-center  flex-col p-20">
        <Link
          activeClass="active"
          to="AddTitle"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="rounded-md font-semibold text-lg bg-[#0D0D0D] hover:bg-[#CAD5E2] hover:text-black mt-2 p-1 w-44 flex items-center justify-center">
            Home
          </button>
        </Link>
        <Link
          activeClass="active"
          to="AddTasks"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
            <button className="rounded-md font-semibold text-lg bg-[#0D0D0D] hover:bg-[#CAD5E2] hover:text-black mt-2 p-1 w-44 flex items-center justify-center">
              User List
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
