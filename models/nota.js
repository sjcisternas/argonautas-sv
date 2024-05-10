const mongoose = require('mongoose');

const NotaSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    author: [{
        firstname: String,
        lastname: String
    }],
    body: [{
        parrafo: String,
        subtitulo: String,
        image: [{
            url: String,
            pie: String
        }]
    }],
    image: String,
    fuentes: [{
        author: String,
        year: Number,
        titleAndSource: String
    }],
    categorias: Array,
    keywords: Array
});

// Función de pre-save para capitalizar los campos firstname y lastname
NotaSchema.pre('save', function(next) {
    // Capitalizar la primera letra del firstname y lastname
    if (this.author.firstname) {
        this.author.firstname = this.auhor.firstname.charAt(0).toUpperCase() + this.author.firstname.slice(1).toLowerCase();
    }
    if (this.author.lastname) {
        this.author.lastname = this.author.lastname.charAt(0).toUpperCase() + this.author.lastname.slice(1).toLowerCase();
    }
    next();
});

//exportar
module.exports = mongoose.model('Nota', NotaSchema); 