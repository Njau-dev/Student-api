const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const User = mongoose.model('user', userSchema);
// Create a model that is going to represent our collection in the DB.

module.exports = User;
// here we are exporting this file so that we can use it in other files.