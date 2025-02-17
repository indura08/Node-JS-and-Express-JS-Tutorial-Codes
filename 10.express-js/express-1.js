const express = require("express")
const app = express()

app.get('/' , (req,res) => {
    console.log("this is home page")
    res.send("this is home page and this is your browser speaking")
}) 

app.get('/about', (req,res) => {
    res.send("this is about page")
})

app.all("*" , (req,res) => {    //meke tharuwen kiynne one ekak kiyl e kiynne get,put method wage one ekk
    res.status(404).send("<h1> resource not found</h1>")    //me all ekedi hama ekama wage cover wenwa, 404 thiyna hama ekam me all ekn cover wenwa eki status kiyla status code eka daanne
})
app.listen(5001 , () => console.log("server is listening on port 5001"))