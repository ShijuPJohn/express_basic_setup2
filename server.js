const mongoose = require('mongoose')
const app = require('./app');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(con => {
    console.log("DB connection successful")
});
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
const nUser = new User({
    name: "SPJ JOHN",
    email: "spj@email.com",
    password: "secretpassword",
    isAdmin: true
})
nUser.save().then(res => {
    console.log(res)
}).catch(er => {
    console.log('error',er)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})