const express = require('express');
const studentRoutes = require('./routes/StudentRoute');
const courseRoutes = require('./routes/CourseRoutes')
const userRoutes = require('./routes/UserRoutes')
const app = express();
require('dotenv').config();

require('./helpers/init_mongodb');

app.use(studentRoutes);
app.use(express.json());
app.use(courseRoutes);
app.use(userRoutes);


//handling 404 error
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})


//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.PORT || 4000, function () {
    console.log('Now listening for requests on https://localhost:4000');

});