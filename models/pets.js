const res = require('express/lib/response')
const conexao = require('../infraestrutura/conexao')
const upLoadDeArquivo = require('../arquivos/uploadDeArquivos')
class Pet{
    adiciona(pet){
        const query = 'INSERT INTO Pets Set ?'

        upLoadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {

            const novoPet = {nome: pet.nome , imagem: novoCaminho}

            conexao.query(query, novoPet, (error)=>{
                if(error){
                    res.sendStatus(400).json(error)
                }else{
                    res.sendStatus(200).json(novoPet)
                }
            })
        })

        
    }

}

module.exports = new Pet();