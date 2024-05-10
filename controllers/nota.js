/* CRUD DE LAS NOTAS */

const Nota = require('../models/nota');
const changePath = require('../utils/getFileName');

//CREAR
async function createNota(req, res){

    const {title, author, body, image, fuentes} = req.body;

    //creo la nota
    const nota = new Nota({
        title: title,
        author: JSON.parse(author),
        body: JSON.parse(body),
        image: image,
        fuentes: JSON.parse(fuentes)
    });

    //cambio la ruta de la img
    const imagePath = changePath.getFileName(req.files.image);

    //guardo la url de la imagen como parámetro del objeto JSON de la nota
    nota.image = imagePath;

    console.log(nota);

    //guardo la nota en la base de datos
    try{
        await nota.save();
        res.status(200).send({msg:'Nota guardada correctamente.'});
    } catch (err) {
        res.status(500).send({msg: 'Error al crear la nota.'});
    }
}

//OBTENER
async function getNotas(req, res){
    try{
        const notas = await Nota.find();

        res.status(200).send(notas);
    } catch (err) {
        res.status(500).send({msg: "Error al obtener las notas."});
    }
}

//OBTENER NOTA INDIVIDUAL
async function getNotaIndividual(req,res) {
    
    const { id } = req.params;

    try{
        const nota = await Nota.findById(id);

        //verificar que exista la nota
        if(!nota){
            res.status(404).send({msg:'No se encontró la nota.'});
        } else {
            res.status(200).send(nota);
        }
    } catch (err) {
        res.status(500).send({msg: 'Error al obtener la nota.'})
    }
}

//ACTUALIZAR
async function updateNota(req,res) {

    //nota a actualizar
    const { id } = req.params;

    //datos nuevos
    const notaUpdate = req.body;

    //actualizar la ruta de imagen de la nueva nota
    const imagePath = changePath.getFileName(req.files.image);
    notaUpdate.image = imagePath;

    //actualizar nota con nuevos datos
    try {
        await Nota.findByIdAndUpdate({_id: id}, notaUpdate);
        res.status(200).send({msg: 'Nota actualizada.'});
    } catch (err) {
        res.status(500).send({msg: 'Error al actualizar la nota.'});
    }
}

//ELIMINAR
async function deleteNota (req,res) {
    
    //id nota a eliminar
    const { id } = req.params;

    //eliminar la nota
    try {
        await Nota.findByIdAndDelete(id); 
        res.status(200).send({msg: 'Nota eliminada correctamente'});
    } catch (err) {
        res.status(500).send({msg: 'Error al eliminar la nota'});
    }

}


//EXPORT
module.exports = {
    createNota,
    getNotas,
    getNotaIndividual,
    updateNota,
    deleteNota
}