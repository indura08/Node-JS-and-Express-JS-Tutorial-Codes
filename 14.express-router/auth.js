const express = require('express')
const router = express.Router()

router.post('/' , (req,res) => {
    console.log(req.body) // men blgnna puluwan ai name kiyl pahala object destructure eka kdla thiynne kiyla, name kiyna eka thami form eke iput tag eke name eka widiyt deela thiynne eki const { name } = req.body kiyla argena thiynne, req body eken ena property eke name eka 'name'
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

module.exports = router