const http = require("http")
const server = http.createServer((req,res) => {

    const url = req.url //req ovject eke eka property(attribute) ekaka thamai url kiynne. meken url eka denwa site eke

    if(url === "/"){
        console.log("user has hit the server")
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1> this is home page </h1>')
        res.end()
    }

    else if(url === '/about'){
        console.log("user went to about page")
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1> this is about page </h1>')
        res.end()

    }

    else{
        console.log("user went to not found page")
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1> page not found </h1>')
        res.end()
    }
})

server.listen(5001)

//me widiyt if else dada denna puluwan eka eka widiye page load wena ewa server eka haraha