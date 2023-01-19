const express = require("express")
const router = express.Router()
const {
    home,
    register,
    login
} = require("../controllers/userRegistration")


const {
    createTodo,
    getAllTodo,
    editTodo,
    deleteTodo,
    AddTasks,
    editTasks,
    searchTodo,
    getAllTasks
} = require("../controllers/userController")


// Home page
router.get("/",home)
router.post("/register", register)
router.post("/login", login)

// Todo 
router.post("/createTodo",createTodo)
router.get("/getAllTodo", getAllTodo)
router.put("/editTodo/:id", editTodo)
router.delete("/deleteTodo/:id", deleteTodo)
router.get("/searchTodo/:id", searchTodo)
// Todo tasks
router.post("/AddTasks/:id", AddTasks)
// router.get("/getAllTasks", getAllTasks)
router.put("/editTasks/:id", editTasks)

module.exports = router;