const conexao = require('./conexao');

const executaQuery = (query, params = '') =>{
    return new Promise((resolve, reject)=>{
        conexao.query(query, params, (erros, resultados, campos)=>{
            if(erros){
                reject(erros)
            }else{
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery;