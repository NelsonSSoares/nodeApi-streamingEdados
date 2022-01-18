const fs = require('fs');

fs.readFile('../assets/salsicha.jpg', (error, buffer) =>{
    console.log('img foi bufferizada ');
    fs.writeFile('../assets/salsicha2.jpg', buffer, (error, buffer)=>{
        console.log('imagem foi escrita com sucesso');
    })
});

