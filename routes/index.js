
// const gods = require('express').Router();
// const realms = require('express').Router();
const rootRouter = require('express').Router();

const gods = require('./gods');
const realms = require('./realms');


rootRouter.get('/', (req, res) => {
    res.json({'info': 'Welcome to gods API!'})
})

rootRouter.use('/gods', gods);
rootRouter.use('/realms', realms)

// router.use('/gods', gods);
// router.use('/realms',realms);

module.exports = rootRouter;