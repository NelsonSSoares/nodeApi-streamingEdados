const res = require('express/lib/response')
const conexao = require('../infraestrutura/conexao')
class Pet{
    adiciona(pet){
        const query = 'INSERT INTO Pets Set ?'
        conexao.query(query, pet, (error)=>{
            if(error){
                res.sendStatus(400).json()
            }else{
                res.sendStatus(200).json(pet)
            }
        })
        
    }

}

module.exports = new Pet();