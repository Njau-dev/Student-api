const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },

});

//hashing the password before its saved
userSchema.pre("save", async function (next) {
    try {
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

//comparing password entered to one in db
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bycrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model('user', userSchema);
// Create a model that is going to represent our collection in the DB.

module.exports = User;
// here we are exporting this file so that we can use it in other files.