const express = require("express")
const app = express()

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url, time)
    next() // me next function eka invoke kale nattnm server eka load wenne nha eka hinda naiwaryenma meka invoke wennama one hama middle ware ekk anthimtm
}

app.get('/' , logger , (req,res) => { // samnyen me get eka athule api mechchr wela damme parameter deki dan me emiddleware scn ekedi kiynwa me deka madden middleware eka daanna puluwan kiyl 
    res.send('HOME')
})

app.get('/about' , logger , (req,res) => {
    res.send("this is about page")
})

app.listen(5002, () => console.log("server is listening on port 5002"))
