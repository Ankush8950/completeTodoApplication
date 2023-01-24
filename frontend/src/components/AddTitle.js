import React, { useState } from "react";
import axios from "axios";

const AddTitle = () => {
  const [addTitle, setAddTitle] = useState("");
  const [addTasks, setAddTasks] = useState("");
  // const [tasks, setTasks] = useState();

  const submitData = async () => {
    const data = {
      title: addTitle,
      tasks: addTasks
    };
    if (!addTitle) {
      alert("please add title");
    }
      try {
        const res = await axios.post("/createTodo", data);
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    
  };

  // const tasksData =async () =>{
  //   const tasksData = {
  //     tasks:addTasks
  //   }
  //   try {
  //      const tasks = await axios.post(`/AddTasks`, tasksData)
  //      console.log(tasks)
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }

  const OnHandleData = (e) => {
    e.preventDefault();
    submitData();
    // tasksData();
    setAddTitle("");
    setAddTasks("")
  };


  return (
    <div className="w-[50rem] h-screen " id="AddTitle">
      <div className="pt-10 pb-5">
        <h1 className="font-semibold text-3xl text-center">Add Title</h1>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="w-[50rem] pt-20">
        <form onSubmit={OnHandleData} className="flex flex-col items-center ">
          <input
            className="w-[40rem] h-10   placeholder:text-slate-400 block bg-[#F3F4F6] w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            placeholder="Add your title"
            name="title"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
          <textarea
            className="resize bg-[#F3F4F6] rounded-md w-[40rem] mt-3 h-64 p-2 border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Add Tasks...."
            value={addTasks}
            onChange = {
              (e) => setAddTasks(e.target.value)
            }
          ></textarea>
          <button
            type="submit"
            className="bg-transparent mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-[40rem]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTitle;
