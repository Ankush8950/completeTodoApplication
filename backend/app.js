require("dotenv").config()
const connectDB = require("./config/db")
connectDB();
const UserRouter = require("./router/UserRouter")
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.use(UserRouter)
module.exports = app;