const { Router } = require('express');

const router = Router();


router.use('/user', require('./users.route'));

module.exports = router;
