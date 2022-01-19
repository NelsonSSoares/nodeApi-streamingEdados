const fs = require('fs'); // file system

fs.createReadStream('../assets/salsicha.jpg')
.pipe(fs.createWriteStream('../assets/salsicha-stream.jpg'))
.on('finish', ()=>{
    console.log('Salsicha foi estrico com sucesso');
})

