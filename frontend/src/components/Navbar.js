import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-3/12 h-screen bg-[#4338CA] text-white'>
        <ul className="flex flex-col p-10">
        <NavLink className="text-white hover:text-blue-800" to='/todo' >
        <button className="font-semibold text-lg bg-black mt-2 p-1 w-44 flex items-center justify-center">
        Home
        </button></NavLink>
        <NavLink className="text-white hover:text-blue-800" to='/userlist' >
        <button className="font-semibold text-lg bg-black mt-2 p-1 w-44 flex items-center justify-center">
        User List
        </button></NavLink>
        </ul>
    </div>
  )
}

export default Navbar