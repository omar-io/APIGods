const router = require('express').Router();
const {
    getRealm,
    getRealms,
    createRealm,
    updateRealm,
    deleteRealm
} = require('../controllers/realms')

//vamo a definir las rutas
router.get('/', getRealms);
router.get('/:id', getRealm);
router.post('/', createRealm);
router.patch('/:id', updateRealm);
router.delete('/:id', deleteRealm);

module.exports = router;