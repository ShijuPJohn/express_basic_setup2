const express = require('express');
if (process.env.NODE_ENV==="development"){
    const morgan = require('morgan');
    app.use(morgan('dev')) //for logging
}
const userRoutes = require('./routes/userRoutes')
const app = express();
app.use(express.json())

app.use('/api/users',userRoutes)
module.exports = app