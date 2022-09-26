
// const gods = require('express').Router();
// const realms = require('express').Router();
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to gods API!'})
})

// router.use('/gods', gods);
// router.use('/realms',realms);

module.exports = router;