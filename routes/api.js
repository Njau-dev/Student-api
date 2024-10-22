const express = require('express');
const Student = require('../models/student-model')
const routes = express.Router();


//get a list of students from the database
routes.get('/students', (req, res) => {
    res.send({ type: 'Get request' });
});

//add student to db
routes.post('/addstudent', async (req, res, next) => {

    try {
        const student = new Student(req.body)
        const result = await student.save();
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})

//update students in the DB
routes.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

//delete a student from the DB
routes.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = routes;