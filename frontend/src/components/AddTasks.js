import React, { useState, useEffect } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";
import AddmultiTasks from "./AddmultiTasks";
import EditTasks from "./EditTasks";
import UserNotFound from "./UserNotFound/UserNotFound";

const AddTasks = () => {
  const [AddTasks, setAddTasks] = useState("");
  const [getallitem, setGetAllItem] = useState(AddTasks);
  const [showTasks, setShowTasks] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [addmultiTasks, setAddMultitasks] = useState(false);
  const [editTasks, setEditTasks] = useState(false);

  // Get all todo list
  const getUerList = async () => {
    const res = await axios.get("/getAllTodo");
    // console.log(res.data.todo);
    if (res.data.todo) {
      setAddTasks(res.data.todo);
      setGetAllItem(res.data.todo);
    }
  };

  useEffect(() => {
    getUerList();
  }, []);

  // search function
  const searchTodo = async (e) => {
    try {
      const quary = e.target.value.toLowerCase();
      if (quary) {
        const res = await axios.get(`/searchTodo/${quary}`);
        if (res) {
          setGetAllItem(res.data.data);
        }
      } else {
        setGetAllItem("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // tasks show
  const HandleIndex = (index) => {
    showTasks !== index && setShowTasks(index);
  };

  // delete todo
  const deteleTodo = async (todoid) => {
    const res = await axios.delete(`/deleteTodo/${todoid}`);
    console.log(res);
  };

  // console.log(AddTasks)
  const onHandleTasksItem = (index) => {
    console.log(index);
    const tasksItem = AddTasks.filter((element) => {
      return element.tasks;
    });

    if (tasksItem.length > index) {
      // console.log(tasksItem[index].tasks);
      setAddTasks(tasksItem[index].tasks);
      // const itemTasks = tasksItem[index].tasks
      // const iteretor = itemTasks.values()

      // for(let item of iteretor){
      //   setAddTasks(item);
      //   console.log(item)
      // }
    }
  };

  return (
    <div className="w-[50rem] h-full flex flex-col items-center justify-center" id="AddTasks">
      <div className="w-full h-20 bg-white">
        <input
          className="bg-[#F3F4F6] border-t-0 h-20 outline-inherit appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          id="inline-full-name"
          type="search"
          placeholder="search user"
          name="title"
          onChange={searchTodo}
        />
      </div>

      <div className="flex flex-col w-[45rem] mt-10 overscroll-auto relative">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getallitem.length > 0 ? (
                    getallitem.map((val, index) => {
                      return (
                        <>
                          <tr
                            className="bg-white border-b cursor-pointer"
                            key={val._id}
                            onClick={() => HandleIndex(index)}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {val.title}
                            </td>
                            <td
                              className="text-base  font-bold text-[#3DBE29] px-6 py-4 whitespace-nowrap"
                              onClick={() => setEditTodo(true)}
                            >
                              {editTodo ? (
                                <EditTodo EditTodo={setEditTodo} val={val} />
                              ) : (
                                "Edit"
                              )}
                            </td>
                            <td
                              className="text-base font-semibold text-[#E21717] px-6 py-4 whitespace-nowrap"
                              onClick={() => deteleTodo(val._id)}
                            >
                              Delete
                            </td>
                          </tr>

                          {showTasks === index && (
                            <tr>
                              <td
                                className="text-sm text-gray-900 h-20 font-light  px-8 overflow-hidden whitespace-nowrap cursor-pointer"
                                onClick={() => {
                                  onHandleTasksItem(index);
                                  setEditTasks(true);
                                }}
                              >
                                {`${val.tasks}`}
                              </td>
                              {/* show the edit tasks item on click */}
                              <div>
                                {editTasks ? (
                                  <EditTasks
                                    val={val}
                                    editTasks={setEditTasks}
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                              <td
                                className="text-base  font-bold  cursor-pointer text-[#3DBE29]  px-8 py-4 whitespace-nowrap"
                                onClick={() => {
                                  setAddMultitasks(true);
                                }}
                              >
                                {addmultiTasks ? (
                                  <AddmultiTasks
                                    AddmultiTasks={setAddMultitasks}
                                    val={val}
                                  />
                                ) : (
                                  "Add Tasks"
                                )}
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })
                  ) : (
                    <UserNotFound />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
