
//creating a simple basic http module.
const http = require("http")

const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.end("welcome to home page")
    }
    else if(req.url === "/about"){
        res.end("here is our short hsitory")
    }
    else {
        res.end(`<h1> Oops!</h1>
                <p> we cant find the page your requesting</p>
                <a href = "/"><button>back home</button></a>
        `)
    }
})

server.listen(5000);