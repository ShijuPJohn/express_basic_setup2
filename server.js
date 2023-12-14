const mongoose = require('mongoose')
const app = require('./app');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(con => {
    console.log("DB connection successful")
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})