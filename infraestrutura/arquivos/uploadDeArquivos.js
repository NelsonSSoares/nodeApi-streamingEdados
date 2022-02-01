const fs = require('fs'); // file system
const path = require('path');
module.exports = (caminho, nome, callImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho) // verifica a extensão no final do caminho 
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1))

    if (tipoEhValido === -1) {
        console.log('error tipo invalido');
    } else {

        const novoCaminho = `./assets/imagens/${nome}${tipo}`;
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callImagemCriada(novoCaminho))

    }

}

