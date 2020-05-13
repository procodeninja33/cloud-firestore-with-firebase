'use strict';

const firebaseRef = require('../../config/firebaseConfig').firebaseRef;

/**
 * @ Function Name      : addStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Add new Student
 */
let addStudent = async (req) => {

    const saveField = {
        usr_firstname: req.body.usr_firstname,
        usr_lastname: req.body.usr_lastname,
        usr_email: req.body.usr_email
    }

    console.log('saveField', saveField);

    return firebaseRef.collection('student').doc().set(saveField);
}

/**
 * @ Function Name      : getStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Get Student by id
 */
let getStudent = (req) => {

    return firebaseRef.collection('student').doc(req.params.id).get().then((snapshot) => {

        // check student record is exist or not, if exist then countinue
        if (snapshot.data()) {

            return snapshot.data();
        } else {

            // student not found
            return 1;
        }
    });
}

/**
 * @ Function Name      : getAllStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Get all students
 */
let getAllStudent = (req) => {
    return firebaseRef.collection('student').get().then((snapshot) => {
        let returnObject = {};
        snapshot.forEach(doc => {
            returnObject[doc.id] = doc.data()
        });
        return returnObject;
    });
}

/**
 * @ Function Name      : deleteStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Delete student by id
 */
let deleteStudent = (req) => {

    return firebaseRef.collection('student').doc(req.params.id).get().then((snapshot) => {

        // check student record is exist or not, if exist then countinue
        if (snapshot.data()) {

            return firebaseRef.collection('student').doc(req.params.id).delete().then((snapshot) => {
                return snapshot;
            });
        } else {

            // student not found
            return 1;
        }
    });
}

/**
 * @ Function Name      : editStudent
 * @ Function Params    : 
 * @param {*} req
 * @ Function Purpose   : Edit student by id
 */
let editStudent = (req) => {

    return firebaseRef.collection('student').doc(req.params.id).get().then((snapshot) => {

        // check student record is exist or not, if exist then countinue
        if (snapshot.data()) {

            const saveField = {
                usr_firstname: req.body.usr_firstname,
                usr_lastname: req.body.usr_lastname,
            }

            return firebaseRef.collection('student').doc(req.params.id).update(saveField).then((snapshot) => {
                return snapshot;
            });
        } else {

            // student not found
            return 1;
        }
    });


}


module.exports = {
    addStudent,
    getStudent,
    getAllStudent,
    deleteStudent,
    editStudent
}