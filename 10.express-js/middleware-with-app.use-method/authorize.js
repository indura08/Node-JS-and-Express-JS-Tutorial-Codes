const authorized = (req,res,next) => {
    console.log("authorize")
    next()
}

module.exports = authorized