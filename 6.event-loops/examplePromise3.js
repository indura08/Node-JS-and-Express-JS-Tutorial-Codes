const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve , reject) =>{
        readFile(path, 'utf8' , (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText('6.event-loops/hello.txt').then((result) => console.log(result)).catch((err) => console.log(err));

const start = async() => {
    const first = await getText('6.event-loops/hello.txt')
}

start()

