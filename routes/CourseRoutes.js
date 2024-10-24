const express = require('express');
const course_controller = require('../controllers/course_controller');

const routes = express.Router();

//get a list of courses from the database
routes.get('/getcourse', course_controller.getAllCourses);

//add course to db
routes.post('/addcourse', course_controller.addCourse)

//update courses in the DB
routes.patch('/updatecourse/:id', course_controller.updateCourse)

//delete a course from the DB
routes.delete('/deletecourse/:id', course_controller.deleteCourse);

module.exports = routes;