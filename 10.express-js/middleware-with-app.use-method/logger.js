const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url, time)
    next() // me next function eka invoke kale nattnm server eka load wenne nha eka hinda naiwaryenma meka invoke wennama one hama middle ware ekk anthimtm
}
module.exports = logger