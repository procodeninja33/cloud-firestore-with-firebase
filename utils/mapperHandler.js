'use strict';

/**
 * @ Function Name      : requestResponse
 * @ Function Params    : 
 * @param {boolean} status
 * @param {string} message
 * @param {*} data
 * @ Function Purpose   : Set request response
 */
function requestResponse(status, message, data = {}) {
    return {
        status: status,
        message: message,
        data: data
    };
}

module.exports = {
    requestResponse
};
