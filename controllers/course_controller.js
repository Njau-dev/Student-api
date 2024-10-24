const Course = require('../models/course_model')

module.exports = {

    addCourse: async (req, res) => {

        try {
            const course = new Course(req.body);
            const message = await course.save();

            res.send({ message: "New Course Added Successfully" })
        } catch (error) {
            console.log(error.message);
        }
    },

    getAllCourses: async (req, res) => {
        await Course.find({}).then((course) => {
            res.send(course);
        });
    },

    updateCourse: async (req, res) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true }
            const result = await Course.findByIdAndUpdate(id, update, options)

            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteCourse: async (req, res) => {
        const id = req.params.id

        try {
            const course = await Course.findByIdAndDelete(id)
            const message = await course;

            res.send({ message: "Course Deleted Successfully" })

        } catch (error) {
            console.log(error.message);
        }

    }
}