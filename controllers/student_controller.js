const Student = require('../models/student-model');

module.exports = {
    addStudent: async (req, res) => {

        try {
            const student = new Student(req.body);
            const message = await student.save();

            res.send({ message: "New Student Added Successfully" })
        } catch (error) {
            console.log(error.message);
        }
    },

    getAllStudents: async (req, res) => {
        await Student.find({}).then((student) => {
            res.send(student);
        });
    },

    updateStudent: async (req, res) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true }
            const result = await Student.findByIdAndUpdate(id, update, options)

            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteStudent: async (req, res) => {
        const id = req.params.id

        try {
            const student = await Student.findByIdAndDelete(id)
            const message = await student;

            res.send({ message: "Student Deleted Successfully" })

        } catch (error) {
            console.log(error.message);
        }

    }

}