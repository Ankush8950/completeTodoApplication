const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
    title: String,
    tasks:[String]
}
)

module.exports = mongoose.model("Todo", userSchema);  