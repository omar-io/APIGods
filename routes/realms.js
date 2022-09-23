const router = require('express').Router();
const {
    getRealm,
    getRealms,
    createRealm,
    updateRealm,
    deleteRealm
} = require('../controllers/realms')

//vamo a definir las rutas
router.get('/realms/', getRealms);
router.get('/realms/:id', getRealm);
router.post('/realms/', createRealm);
router.patch('/realms/:id', updateRealm);
router.delete('/realms/:id', deleteRealm);

module.exports = router;