// me part eke pradanama armuna thami ara e commerce platform ekak hadaddi wage product ekak click kalahama e product eka sambnda dewal withrk denna puluwan wenna back end eke server eka hdna eka mekaata example ekak thiynwa 5:36:00 wage weddi video eke
const express = require("express")
const app = express()

const { users } = require("./data")

app.get('/' , (req,res) => {
    //res.json(users)
    res.send('<h1> Home page </h1><a href = "/api/users">products</a>')
})

//me pahala widiyt okkoma json tika (collection) eka paara ganna puluwam array.map function eken.
app.get('/api/users', (req,res) => {
    const newUser = users.map((user) => {
        const {id, name, email} = user; 
        // mekat thami obejct destructuring kiynne meka equivilant wenwa:
        // const id = user.id;
        // const name = user.name;
        // const email = user.email;
        return {id, name, email}
    })
    res.json(newUser)
})

//menna me widiyt ekin eka ganna puluwan
app.get('/api/users/1' , (req,res)=>{
    const user1 = users.find((user) => user.id===1)
    res.json(user1)
})

//uda eka wagema apita ekin eka type krla gann puluwan
//namuh mehm ekaiknea gnna giyama 100-200 wihr users la hityoth mehm ekain eka liyna eka practicle madi e handa pai use krnwa route prameters
app.get('/api/users/2', (req, res) => {
    const user2 = users.find((user) => user.id === 2)
    res.json(user2)
})

//route parameters use krla wade krmu lsi krgnna idea ekn

app.get('/api/users/:userId', (req,res) => {

    console.log(req.params)
    
    const { userId } = req.params
    console.log(typeof userId)

    const userN = users.find((user) => user.id === Number(userId))
    console.log(userN)
    res.json(userN)
})

//uda code eke widiyt ankyak hariyt useriD varaible ekat labune nattnm mukuth enne nha eka maga aragnna if ekk daala me widiyt hduwahki
app.get('/api/users/:userId', (req, res) => {
    const {userId} = req.params;
    const userN1 = users.find((user) => user.id === Number(userId))
    if(!userN1){
        return res.status(404).send("page not found")
    }else {
        res.json(userN1)
    }
    //meka run krnna meete uda eka comment wenna one
})

app.listen(5001, () => console.log("server is running on port 5001"))