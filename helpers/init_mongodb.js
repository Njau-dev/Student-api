// Connecting to mongodb
const mongoose = require('mongoose');

console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("DB_NAME:", process.env.DB_NAME);

mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.log(err.message);
    })
