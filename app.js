const express = require('express');
const sequelize = require('./config/db')
// const routes = require('./routes/index')
const godsRoute = require('./routes/gods')
const realmsRoute = require('./routes/realms')

const app = express();
app.use(express.json());
// app.use('/', routes);
app.use('/gods', godsRoute);
app.use('/realms', realmsRoute);

//Se recomienda validar que nos podamos conectar a la DB
try{
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB');
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server listening in port " + PORT);
});