const express = require("express")
const app = express()

const logger = require('./logger')
const auth = require('./authorize')
const auth2= require('./authorize2')

//app.use(logger)//me app.use eken hama app.get ekatm me middleware eka adlal wenwa, namuth app.use kalla ta passe liyna app.get walat withri watenne eta udin thiyna ewat watenne nha

//app.use("/api" , logger)//me wage path ekk dela e path ekatr adla app.get wat withrk middleware eka athulth krnna puluwan ewagema thami 'api' kiyla patn aran thiyna link onema ekkt me middleware eka enawa namuth '/', '/about wage ewat enne nha mokd eke 'api kiyl nhane'

app.use([logger,auth,auth2]) // me wage middleware godak denna puluwan eka paara namuth eka [] warsahn athule list ekak widiyt denna one, path ekk mulin deela eta passe middleware list eka denna puluwan argument widiyt

app.get('/' ,  (req,res) => { // samnyen me get eka athule api mechchr wela damme parameter deki dan me emiddleware scn ekedi kiynwa me deka madden middleware eka daanna puluwan kiyl 
    res.send('HOME')
})

app.get('/about' , [auth,logger] , (req,res) => { //meke wage thiyna middleware functions list ekak widiyt onema eka app.get method ekkt (route ekkt) denna puluwan
    //console.log(req.user)
    res.send("this is about page")
})

app.get('/api/product', (req,res) => {
    res.send("This is product page")
})

app.get('/api/items' , (req,res) => {
    res.send("this is item page")
})

app.listen(5002, () => console.log("server is listening on port 5002"))
