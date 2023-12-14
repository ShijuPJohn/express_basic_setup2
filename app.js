const express = require('express');
const app = express();
if (process.env.NODE_ENV === "development") {
    const morgan = require('morgan');
    app.use(morgan('dev')) //for logging
}
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

app.use('/api/users', userRoutes)
module.exports = app