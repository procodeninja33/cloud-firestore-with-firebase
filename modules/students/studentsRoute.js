'use strict';

const studentRoute = require('express').Router();
const studentFacade = require('./studentsFacade');
const responseHandler = require('../../utils/responseHandler');

/**
 * API route for create new student
 */
studentRoute.route('/').post([], (req, res) => {
    studentFacade.addStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

/**
 * API route for get student by id
 */
studentRoute.route('/:id').get([], (req, res) => {
    studentFacade.getStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

/**
 * API route for get all students
 */
studentRoute.route('/').get([], (req, res) => {
    studentFacade.getAllStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

/**
 * API route for delete student
 */
studentRoute.route('/:id').delete([], (req, res) => {
    studentFacade.deleteStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

/**
 * API route for edit student
 */
studentRoute.route('/:id').patch([], (req, res) => {
    studentFacade.editStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

module.exports = studentRoute;