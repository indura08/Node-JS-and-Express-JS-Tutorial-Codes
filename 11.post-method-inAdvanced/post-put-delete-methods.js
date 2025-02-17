const express = require('express')
const app = express()

let { users } = require ('./data')

//static assest middleware
app.use(express.static('./11.post-method-inAdvanced/exampleApplication'))// menna me method ekan thami ara thiyna dam paata web eka browser ekt gatte
//parse form data middleware
app.use(express.urlencoded({extended: false})) //mekn thami url ekn adala name agaya ganna puluwan wenne. mmeka express ekn dena middleware ekk
//parse json middleware
app.use(express.json())

app.get('/api/users' , (req,res) => {
    res.status(200).json({success: true, data:users})
})

app.post('/api/users' , (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false , msg : "please provide valid name"})
    }
    res.status(201).send({success: true, person:name})
})

app.post('/api/postman/users' , (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false , msg : "please provide valid name"})
    }
    res.status(201).send({success: true, person: [...users ,name] })
})

app.post('/login' , (req,res) => {
    console.log(req.body) // men blgnna puluwan ai name kiyl pahala object destructure eka kdla thiynne kiyla, name kiyna eka thami form eke iput tag eke name eka widiyt deela thiynne eki const { name } = req.body kiyla argena thiynne, req body eken ena property eke name eka 'name'
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

//put method scn eka
app.put('/api/users/:id' , (req,res) => { //menna meke thiyna link eka gihin postman eke check krahama gaanat upadate wenwa 4 user id thiyna thanata deepa kiyla update wenwa
    const { id } = req.params
    const { name } = req.body
    console.log(id, name )
    console.log('hello world')
})

//menna me put ekedi krnne user array ekat gihilla check krla blnwa id ekat adalwa user knk innwad nadda kiyla, innwa nm aluth array ekk hdnaw e id ekat adlwa userge name eka change krnwa , nattnm res ekn 404 error ekk denwa
app.put('/api/users/putmethod2/:id' , (req,res) => { //menna meke thiyna link eka gihin postman eke check krahama gaanat upadate wenwa 4 user id thiyna thanata deepa kiyla update wenwa
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)

    const person = users.find((person) => person.id === Number(id))

    if(!person){
        return res.status(404).json({success: false , msg: `no pesrson with id: ${id}`})
    }

    const newPeople = users.map((user) => {
        if(user.id === Number(id)){
            user.name = name;
        }
        return user
    })

    res.status(200).json({sucess: true, data: newPeople})

})
//delete mehtod ek 
//meke e sir kiynwa method eka wenas nm ekama path eka use krnnatth puluwan kiyla  ekiynne put method eke dapu path ekm delete ekt onnm dennth puluwan
app.delete('/api/users/deletemethod/:id', (req,res) => {

    const person = users.find((person) => person.id === Number(req.params.id)) //methndi id eka variable ekkt daala nha oject destructuring krla

    if(!person){
        return res.status(404).json({success: false , msg: `no pesrson with id: ${req.params.id}`})
    }

    const newUsers = users.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true , data: newUsers})



})

app.listen(5002, () => console.log("server is listening on port 5002"))

