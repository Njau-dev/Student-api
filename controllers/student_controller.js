const Student = require('../models/student-model');
const routes = require('../routes/api');

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