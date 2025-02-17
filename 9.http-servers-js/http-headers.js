const http = require("http")
const server = http.createServer((req,res) => {
    console.log("user has hit the server")
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1> this is home page </h1>')
    res.end()
})

server.listen(5001)