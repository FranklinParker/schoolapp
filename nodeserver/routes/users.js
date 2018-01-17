var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res) {
    const user = req.body;
    console.log('login - user', user);
    console.log('Session: ' + JSON.stringify(req.session,null,2));

    req.user = user;
    res.status(200).json({
        status: 'success',
        user: user

    });
});

module.exports = router;
