import React from "react";
import "./App.css"
import Home from "./components/Home";
import UserLogin from "./components/UserForm/UserLogin";
import UserRegister from "./components/UserForm/UserRegister";
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div className="flex w-full h-screen flex  justify-center items-center ">
    <Routes>
      <Route path='/' element={<UserRegister />} />
      <Route path='/login' element={<UserLogin />} /> 
      <Route path="/home" element={<Home />} />
     </Routes>
     <ToastContainer />
     </div>
  );
}

export default App;
