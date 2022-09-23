
const gods = require('express').Router();
const realms = require('express').Router();
const router = require('./gods');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to gods API!'})
})

router.use('/gods', gods);

module.exports = router;