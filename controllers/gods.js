//aki va la lógica CRUD, paginación, etc.

//importamos el modelo GOD
const God = require('../models/gods');


//CREAR GOD
function createGod(req, res) {
    const body = req.body;

    // .create devuelve una promesa, hay k ysar un then ó await
    God.create(body).then(god => {
        res.status(201).json(god);
    });
}

async function getGod(req, res) {
    const id = req.params.id; //tomamos el dato del parametro ID
    const god = await God.findByPk(id);
    res.status(200).json(god); //si es exitoso mandamos un 200 y mandamos el elemento
}

//aki iría la paginación, al pedir todos los dioseses
async function getGods (req, res) {
    const gods = await God.findAll();
    res.status(200).json(gods)
}

async function updateGod(req, res) {
    const id = req.params.id;
    const god = req.body;
    const update = await God.update(god, {where: {id}}); // nos regresa los ID que actualiza

    const godUpdated = await God.findByPk(update[0])

    res.status(200).json(godUpdated)
}

async function deleteGod (req, res) {
    const id = req.params.id;
    const deleted = God.destroy(
        {where: {id}}
        )
    res.status(200).json(deleted);
}   

module.exports = {
    createGod,
    getGod,
    getGods,
    updateGod,
    deleteGod
}