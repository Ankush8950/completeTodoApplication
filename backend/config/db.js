const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn)=>{
        console.log(`DB connected successfull ${conn.connection.host}`)
    })
    .catch((error)=>{
        console.log(error.message);
        process.exit(1)
    })
}

module.exports = connectDB