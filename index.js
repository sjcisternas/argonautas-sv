const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const ipServer = process.env.IP_SERVER;
const apiVersion = process.env.API_VERSION;
const port = 4000;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}`);
        console.log('Conexión exitosa.');
        app.listen(port, () => {
            console.log('========================');
            console.log('=======ARGONAUTAS=======');
            console.log('========================');
            console.log(`http://${ipServer}:${port}/api/${apiVersion}/`);
        })
    } catch (err) {
        console.log('Error al conectarse a la base de datos', err);
    }
}

connectDB();