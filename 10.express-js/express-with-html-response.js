const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("./10.express-js/website bakery+"))

app.get('/' , (req,res) => {
    res.sendFile(path.resolve("10.express-js/website bakery+/shop.html")) // meken thami html files response eka wiiyt denne
} )

app.all("*" , (req,res) => {
    res.status(404).send("web page not found please check again!")
})


app.listen(5001, () => console.log("app is listening on port 5001"))