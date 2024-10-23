const express = require('express');
const student_controller = require('../controllers/student_controller');

const routes = express.Router();

//get a list of students from the database
routes.get('/getallstudents', student_controller.getAllStudents);

//add student to db
routes.post('/addstudent', student_controller.addStudent)

//update students in the DB
routes.patch('/updatestudent/:id', student_controller.updateStudent)

//delete a student from the DB
routes.delete('/deletestudent/:id', student_controller.deleteStudent);

module.exports = routes;