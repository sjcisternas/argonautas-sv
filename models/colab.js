const mongoose = require('mongoose');

const ColabSchema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    date: Date
});

module.exports = mongoose.model('Colab', ColabSchema);