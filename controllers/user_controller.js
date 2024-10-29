// module.exports = {

//     addUser: async (req, res) => {

//         try {
//             const user = new User(req.body);
//             const message = await user.save();

//             res.send({ message: "New User Added Successfully" })
//         } catch (error) {
//             console.log(error.message);
//         }
//     },

//     getAllUsers: async (req, res) => {
//         await User.find({}).then((user) => {
//             res.send(user);
//         });
//     },

//     updateUser: async (req, res) => {
//         try {
//             const id = req.params.id;
//             const update = req.body;
//             const options = { new: true }
//             const result = await User.findByIdAndUpdate(id, update, options)

//             res.send(result);
//         } catch (error) {
//             console.log(error.message);
//         }
//     },

//     deleteUser: async (req, res) => {
//         const id = req.params.id

//         try {
//             const user = await User.findByIdAndDelete(id)
//             const message = await user;

//             res.send({ message: "User Deleted Successfully" })

//         } catch (error) {
//             console.log(error.message);
//         }

//     }
// }

const User = require('../models/user_model');
const { authSchema } = require('../helpers/validationSchema');
const creatError = require('http-errors');
require('dotenv').config();
const { signAccessToken, signRefreshToken } = require('../helpers/jwtHelpers');
const { verifyRefreshToken } = require('../helpers/jwtHelpers');

module.exports = {
    register: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const result = await authSchema.validateAsync(req.body);

            const exists = await User.findOne({ email: email });
            if (exists) throw creatError.Conflict(`${email} has already been registered`);

            const user = new User(result);
            const savedUser = await user.save();

            const accessToken = await signAccessToken(savedUser.id);

            res.send({ accessToken });

        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const result = await authSchema.validateAsync(req.body);
            const user = await User.findOne({ email: result.email });
            if (!user) throw creatError.NotFound('User not registered');

            const isMatch = await user.isValidPassword(result.password);
            if (!isMatch) throw creatError.Unauthorized('username/password is not valid');

            const accessToken = await signAccessToken(user.id);

            res.send({ accessToken });
        } catch (error) {
            if (error.isJoi === true) return next(creatError.BadRequest('Invalid username/ password'));
        }
    }
}
