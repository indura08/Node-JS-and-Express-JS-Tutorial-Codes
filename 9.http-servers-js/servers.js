const http =  require("http")

const server = http.createServer((req, res) => {
    console.log("user has hit the server")
    res.end("the server has responded!")
})

server.listen(5000) // mehm kalama nikan browser ek load wewei thiynwa withri wadk wenne nha mokd yanna one thanak kiyla nhane server ekn browser ekat
