var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let Ajv = require('ajv');
let ajv = Ajv({ allErrors: true, removeAdditional: 'all' });

let inputschema = require('./schema/inputschema.json')

app.use(bodyParser());

app.use('/', require('./routes/index'));
app.use('/', isAuthenticated, require('./routes/signup'));


function isAuthenticated(req, res, next) {
    // if (!req.body.firstName) {
    //     return res.json({
    //         message: 'username is required',
    //     });
    // }
    // if (!req.body.lastName) {
    //     return res.json({
    //         message: 'lastName is required',
    //     });
    // }
    // if (!req.body.email) {
    //     return res.json({
    //         message: 'email is required',
    //     });
    // }

    // if (!req.body.email) {
    //     return res.json({
    //         message: 'email is required',
    //     });
    // }

    let valid = ajv.validate(inputschema, req.body)
    if (!valid) {
        return res.send(ajv.errors)
    }

    next();
}


app.listen(8888);
