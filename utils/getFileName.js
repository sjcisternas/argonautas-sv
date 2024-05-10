function getFileName(file) {
    const filePath = file.path;

    const fileSplit = filePath.split('\\'); 


    //configuro la ruta y la devuelvo
    return `${fileSplit[1]}/${fileSplit[2]}` 
}

module.exports = {
    getFileName
}