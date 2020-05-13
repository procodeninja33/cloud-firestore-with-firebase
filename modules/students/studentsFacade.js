'use strict';

const studentService = require('./studentsService');
const studentConstant = require('./studentsConstant');
const constant = require('../../utils/constant');
const mapperHandler = require('../../utils/mapperHandler');

/**
 * @ Function Name      : addStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Add new Student
 */
let addStudent = (req) => {
    return studentService.addStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.addStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.addStudentError, error);
    });
}

/**
 * @ Function Name      : getStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Get Student by id
 */
let getStudent = (req) => {
    return studentService.getStudent(req).then((data) => {
        if (data === 1) {
            return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.studentNotFoundError, {});
        } else {
            return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.getStudentSuccess, data);
        }
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.getStudentError, error);
    });
}

/**
 * @ Function Name      : getAllStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Get all students
 */
let getAllStudent = (req) => {
    return studentService.getAllStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.getAllStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.getAllStudentError, error);
    });
}

/**
 * @ Function Name      : deleteStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Delete student by id
 */
let deleteStudent = (req) => {
    return studentService.deleteStudent(req).then((data) => {
        if (data === 1) {
            return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.studentNotFoundError, {});
        } else {
            return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.deleteStudentSuccess, data);
        }
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.deleteStudentError, error);
    });
}

/**
 * @ Function Name      : editStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Edit student by id
 */
let editStudent = (req) => {
    return studentService.editStudent(req).then((data) => {
        if (data === 1) {
            return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.studentNotFoundError, {});
        } else {
            return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.editStudentSuccess, data);
        }
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.editStudentError, error);
    });
}

module.exports = {
    addStudent,
    getStudent,
    getAllStudent,
    deleteStudent,
    editStudent
}