const { readFile, writeFile } = require('fs')
const util = require("util")
const readFilePromise = util.promisify(readFile)

const start = async()=>{
    try{
        const first = await readFilePromise('6.event-loops/hello.txt' ,'utf8')
        console.log(first)

    }
    catch(error){
        console.log(error)
    }
}

start();