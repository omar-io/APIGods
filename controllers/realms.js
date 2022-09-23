//aki va la lógica CRUD, paginación, etc.

//importamos el modelo GOD
const Realm = require('../models/realms');


//CREAR GOD
function createRealm(req, res) {
    const body = req.body;

    // .create devuelve una promesa, hay k ysar un then ó await
    God.create(body).then(realm => {
        res.status(201).json(realm);
    });
}

async function getRealm(req, res) {
    const id = req.params.id; //tomamos el dato del parametro ID
    const realm = await Realm.findByPk(id);
    res.status(200).json(realm); //si es exitoso mandamos un 200 y mandamos el elemento
}

//aki iría la paginación, al pedir todos los dioseses
async function getRealms (req, res) {
    const realms = await Realm.findAll();
    res.status(200).json(realms)
}

async function updateRealm(req, res) {
    const id = req.params.id;
    const realm = req.body;
    const update = await Realm.update(realm, {where: {id}}); // nos regresa los ID que actualiza

    const realmUpdated = await God.findByPk(update[0])

    res.status(200).json(realmUpdated)
}

async function deleteRealm (req, res) {
    const id = req.params.id;
    const deleted = Realm.destroy(
        {where: {id}}
        )
    res.status(200).json(deleted);
}   

module.exports = {
    createRealm,
    getRealm,
    getRealms,
    updateRealm,
    deleteRealm
}