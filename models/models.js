const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"]
    },
    email: {
        type: String,
        required: [true, "A user must have an email"]
    },
    password: {
        type: String,
        required: [true, "A user must have a password"]
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
})
const User = mongoose.model('User', userSchema)
module.exports = {User}