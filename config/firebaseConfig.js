'use strict';

const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

// initialize firebase 
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-b82a2.firebaseio.com'
});

// connect with firebase database
const firebaseRef = firebaseAdmin.firestore();

const databaseRef = firebaseAdmin.database();

module.exports = { firebaseRef, databaseRef };