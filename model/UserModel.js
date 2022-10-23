const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        require: true
    }
})

const Users = mongoose.model("users", UserSchema)

module.exports = Users