const express = require('express');
const user_controller = require('../controllers/user_controller');
const cors = require('cors');


const routes = express.Router();

routes.use(cors({ origin: 'http://localhost:5174' }));

//get a list of users from the database
routes.post('/register', user_controller.register);
routes.post('/login', user_controller.login);

module.exports = routes;