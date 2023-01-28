const Todo = require("../model/UserModel");


exports.createTodo = async (req, res) => {
  try {
    const {
      title,tasks
    } = req.body;
    if (!title) {
     return res.send("title required");
    }

    const newTodo = await Todo.create({
      title,tasks
    });

    console.log(newTodo);
    
    res.status(201).json({
      success: true,
      message: "created successfull",
      newTodo,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find()

    res.status(201).json({
      success: true,
      message: "show all data",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      success: true,
      message: "Update success",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "update failed",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "todo deleted success",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "todo deleted failed",
    });
  }
};

exports.searchTodo = async (req, res) => {
  try {
    const data = await Todo.find({
      "$or":[
        {title:{$regex:req.params.id}}
      ]
    })
    res.status(200).json({
      success:true,
      message:"user find succesfull",
      data
    })

  } catch (error) {
    console.log(error)
  }
}

// add to tasks

exports.AddTasks = async (req, res) => {
  try {
    const AddTasks = await Todo.findById(req.params.id);
    const { tasks } = req.body;

     AddTasks.tasks.push(tasks)
    await AddTasks.save((err,AddTasks) => {
      if(err){
        return res 
        .status(400)
        .json({error: "Problem while saving Tasks", err })
      }else{
        res.status(201).json({
          success:true,
          message:"Tasks Added",
          AddTasks
        })
      }
    })

    console.log(AddTasks);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      success: false,
    });
  }
};


// update tasks
exports.editTasks = async (req, res) => {
  try {
    const {
      tasks,
      taskskey
    } = req.body;

    const todo = await Todo.findById(req.params.id);
    console.log(todo.tasks);
    todo.tasks[taskskey] = tasks;
    await todo.save();

    res.status(201).json({
      success: true,
      message: "tasks update success",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "tasks update failed",
    });
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
  } catch (error) {}
};

