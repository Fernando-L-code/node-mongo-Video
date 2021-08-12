import app from './app';

const config = require('./config');
const db = require('./db');

const url =`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.cluster}.llhlj.mongodb.net/${config.db.dbName}?retryWrites=true&w=majority`;

db(url);




app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});


