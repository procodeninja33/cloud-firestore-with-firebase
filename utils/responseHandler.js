'use strict';

/**
 * @ Function Name      : _sendResponse
 * @ Function Params    : 
 * @param {*} res 
 * @param {*} result 
 * @ Function Purpose   : Common API's response send
 */
let _sendResponse = (res, result) => {
    res.send(result)
}

/**
 * @ Function Name      : successResponse
 * @ Function Params    : 
 * @param {*} res 
 * @param {*} result 
 * @ Function Purpose   : Set response for success API's
 */
let successResponse = (res, result) => {

    const response = {
        status: result.status || 200,
        message: result.message,
        data: result.data || {}
    }
    _sendResponse(res, response);
}

/**
 * @ Function Name      : errorHandler
 * @ Function Params    : 
 * @param {*} res 
 * @param {*} result 
 * @ Function Purpose   : Set response for error handle API's
 */
let errorHandler = (res, result) => {
    const response = {
        status: 400,
        message: result.message || '',
        data: result.data || {}
    }
    _sendResponse(res, response);
}

/**
 * @ Function Name      : validationErrorHandler
 * @ Function Params    : 
 * @param {*} res 
 * @param {*} error 
 * @ Function Purpose   : Set response for common validation error handler
 */
let validationErrorHandler = (res, error) => {

    console.log('valdiation Error --->', error);

    const response = {
        status: 400,
        message: error.details ? error.details[0].message : 'There is some issue with validation.',
        data: {}
    }
    _sendResponse(res, response);
}

module.exports = {
    successResponse,
    errorHandler,
    validationErrorHandler
}