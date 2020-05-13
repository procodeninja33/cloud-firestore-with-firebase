'use strict';

const studentRoute = require('../modules/students/studentsRoute');

module.exports = (app) => {

    // student module route
    app.use('/api/student', [studentRoute])
}