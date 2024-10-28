const express = require('express');
const student_controller = require('../controllers/student_controller');
const { verifyAccessToken } = require('../helpers/jwtHelpers');

const routes = express.Router();

//get a list of students from the database
routes.get('/getallstudents', verifyAccessToken, student_controller.getAllStudents);

//add student to db
routes.post('/addstudent', verifyAccessToken, student_controller.addStudent)

//update students in the DB
routes.patch('/updatestudent/:id', verifyAccessToken, student_controller.updateStudent)

//delete a student from the DB
routes.delete('/deletestudent/:id', verifyAccessToken, student_controller.deleteStudent);

module.exports = routes;