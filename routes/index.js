'use strict';

const _ = require('lodash');
const UTIL = require('util');
const boundMethod = require('../lib/util');
const CommonController = require('../controller/CommonController');
const ResponseController = require('../controller/ResponseController');
const ErrorController = require('../controller/ErrorController');


module.exports = function (app, controllerObject) {

    app.get(
        '/',
        (req, res, next) => res.end()
    );
    
    app.get(
        '/status',
        function(req, res, next) {
            console.log(controllerObject);
        },
        (req, res, next) => res.sendStatus(200)
    );

    app.get(
        '/_status',
        (req, res, next) => res.status(200).json({})
    );

    app.get(
        '/v1/readshare',
        CommonController.apiNoLongerSupported
    );

    app.get(
        '/v1/gettestdata',
        boundMethod(controllerObject.TEST_CONTROLLER, 'getDataFromTest')
    );
};