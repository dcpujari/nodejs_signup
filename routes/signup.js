
var express = require('express')
var router = express.Router({ mergeParams: true });

router.post('/signup', function (req, res, next) {
    
    if (!req.body.subscribe) {
        res.json({
            message: 'Hello ' + req.body.firstName + " " + req.body.lastName + ", Thank you for signing up.You account is now created"
        });
    } else {
        res.json({
            message: 'Hello ' + req.body.firstName + " " + req.body.lastName + ", Thank you for signing up.You account is now created You would be receiving our periodic, newsletters to your email: " + req.body.email
        });
    }
})

module.exports = router;