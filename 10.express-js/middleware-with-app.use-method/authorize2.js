const authorized = (req,res,next) => {
    const { user } = req.query

    if(user === "indura"){
        req.user = {name: "john" , id : 1}
        next()
    }
    else {
        res.status(401).send("unauthorized user!")
    }
    
}
module.exports = authorized