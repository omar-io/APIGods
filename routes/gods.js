const router = require('express').Router();
const {
    getGod,
    getGods,
    createGod,
    updateGod,
    deleteGod
} = require('../controllers/gods')

//vamo a definir las rutas
router.get('/gods/', getGods);
router.get('/gods/:id', getGod);
router.post('/gods/', createGod);
router.patch('/gods/:id', updateGod);
router.delete('/gods/:id', deleteGod);

module.exports = router;