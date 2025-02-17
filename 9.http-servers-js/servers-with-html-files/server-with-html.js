const http = require("http")
const {readFileSync} = require("fs")

const home = readFileSync("9.http-servers-js/servers-with-html-files/home.html")
const style = readFileSync("9.http-servers-js/servers-with-html-files/main.css")

const server = http.createServer((req, res) =>{

    const url = req.url
    console.log(url);

    if(url === "/home"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(home)
        res.end();
        console.log("went for home.html");
    }

    else if(url === "/9.http-servers-js/servers-with-html-files/main.css"){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(style)
        res.end()
        //me widiyt ekin eka ganna one css saha images ehma render krgnnwa nm
    }
})

server.listen(5001)