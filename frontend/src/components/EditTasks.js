import React, { useState } from 'react'
import axios from 'axios'

const EditTasks = ({val,editTasks}) =>{
    const [updateTasks,setUpdateTasks] = useState("")
    const [taskindex,setTasksIndex] = useState('')

  // console.log(val);
  const itemTasks = val.tasks.values()

  for(let item of itemTasks){
    console.log(item);
    // setTasksIndex(item)
  }
  // console.log(taskindex)

    // console.log(updateTasks)

    const UpdateTasks = async (tasksid) => {
      console.log(tasksid)
       try {
        // const id = req.params
         const res = await axios.put(`/editTasks/${tasksid}`, {
            tasks:updateTasks,
            taskskey: 1
          })

         setUpdateTasks(res)
         console.log(res);                             
       } catch (error) {
        console.log(error)
       }
    }



  return (
     <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-[30rem] h-[20rem] absolute top-0 left-[10rem]">
      <h1 className="font-semibold text-2xl text-blue-700">Edit your tasks item</h1>
      <form
        className="mt-10"
        onSubmit={(todo) => {
          todo.preventDefault();
          UpdateTasks(taskindex);
          // setUpdate('')
          editTasks(false);
        }}
      >
        <div className="form-group mb-6">
          <input
            type="text"
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
            id="exampleInput7"
            placeholder="Title"
            value={updateTasks}
            onChange={(e) =>{ 
              setUpdateTasks(e.target.value)
              }}
          />
        </div>

        <div className="form-group mb-6"></div>

        <button
          type="submit"
          className="
      mt-10
      w-full
      px-6
      py-2.5
      bg-blue-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      text-black
      hover:text-white
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          update
        </button>
      </form>
    </div>
  )
}

export default EditTasks