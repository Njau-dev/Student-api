const express = require('express');
const student_controller = require('../controllers/student_controller');
const { verifyAccessToken } = require('../helpers/jwtHelpers');

const routes = express.Router();

//get a list of students from the database
routes.get('/getallstudents', verifyAccessToken, student_controller.getAllStudents);

//get a single student by ID from the database
routes.get('/getstudent/:id', student_controller.getStudentById);

//add student to db
routes.post('/addstudent', verifyAccessToken, student_controller.addStudent)

//update students in the DB
routes.patch('/updatestudent/:id', student_controller.updateStudent)

//delete a student from the DB
routes.delete('/deletestudent/:id', student_controller.deleteStudent);

module.exports = routes;