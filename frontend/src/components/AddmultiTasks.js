import React, { useState } from "react";
import axios from "axios";
import { BsPlusLg } from "react-icons/bs";

const AddmultiTasks = ({ AddmultiTasks, val }) => {
  // console.log(val)
  const [addtasks, setAddtasks] = useState("");
  const [addplus, setAddplus] = useState([]);
  // console.log(addplus)

  const multiAddTasks = async (tasksid) => {
    try {
      if (!addtasks) {
        alert("Add new tasks");
      } else {
        const res = await axios.post(`/AddTasks/${tasksid}`, {
          tasks: addtasks,
        });
        setAddtasks(res);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addedMoreData = () => {
    const AddMore = [...addplus, ""];
    setAddplus(AddMore);
    console.log(AddMore);
  };

  const onHandleChange = (e, i) => {
    const inputData = [...addplus];
    inputData[i] = e.target.value;
    setAddplus(inputData);
    console.log(inputData);
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-[30rem] h-auto  absolute top-0 left-[10rem]">
      <h1 className="font-bold text-2xl">Add your tasks</h1>
      <form
        className="mt-10"
        onSubmit={(todo) => {
          todo.preventDefault();
          multiAddTasks(val._id);
          AddmultiTasks(false);
        }}
      >
        <div className="form-group mb-6 flex items-center justify-center">
          <input
            type="text"
            className="form-control block
                    w-4/5
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
            value={addtasks}
            onChange={(e) => setAddtasks(e.target.value)}
          />

          <div
            className="border-2 
         border-border-gray-300 p-1"
          >
            <BsPlusLg
              className="font-bold text-2xl"
              onClick={() => addedMoreData()}
            />
          </div>
        </div>

        {addplus &&
          addplus.map((data, index) => {
            return (
              <div className="form-group mb-6 flex items-center justify-center">
                <input
                  type="text"
                  className="form-control block
                  w-4/5
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
                  value={addplus}
                  onChange={(e) => onHandleChange(e, index)}
                />
                <div
                  className="border-2 
         border-border-gray-300 p-1"
                >
                  <BsPlusLg
                    className="font-bold text-2xl"
                    onClick={() => addedMoreData()}
                  />
                </div>
              </div>
            );
          })}

        <div className="form-group mb-6"></div>

        <button
          type="submit"
          className="
              mt-10
              w-full
              px-6
              py-2.5
              bg-blue-600
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
          submit
        </button>
      </form>
    </div>
  );
};

export default AddmultiTasks;
