const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    coursename: {
        type: String,
        required: [true, 'Course name is required']
    },
    courselevel: {
        type: String,
        required: [true, 'Course level is required']
    },
    coursetime: {
        type: String,
        required: [true, 'Course duration is required']
    }
});

const Course = mongoose.model('course', courseSchema);
// Create a model that is going to represent our collection in the DB.

module.exports = Course;
// here we are exporting this file so that we can use it in other files.