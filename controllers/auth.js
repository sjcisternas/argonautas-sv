const Colab = require('../models/colab')

async function subscription(req,res){
    const {name, lastname, email} = req.body;

    //validacion
    if(!name) {
        res.status(400).send({msg: 'El nombre es obligatorio.', id: 1});
        return;
    }
    if(!lastname) {
        res.status(400).send({msg: 'El apellido es obligatorio.', id: 2});
        return;
    }
    if(!email) {
        res.status(400).send({msg: 'El email es obligatorio.', id: 3});
        return;
    }


    //modelo para recibir datos
    const colab = new Colab({
        name: name,
        lastname:name,
        email: email.toLowerCase(),
        date: new Date()
    });

    try {
        await colab.save();
        res.status(200).send({msg: 'Recibimos tu contacto. En breve nos vamos a comunicar con vos.'});
    } catch (err) {
        res.status(400).send({msg: 'Error al guardar al Aportante en la base de datos.'});
    }
}

module.exports = {
    subscription,
} 