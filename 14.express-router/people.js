const express =  require("express")
const router = express.Router()

let { users } = require('./data')
const { getPeople, createPerson } = require('./controllers/people')

//this a router js file this makes the route scn eka

router.get('/' , getPeople) //menna me wage ara wenama controllers file eke functionality eka liyla e functionality eka me wage import krla use krnna puluwan . mekn code eka more cleaner and organized wenwa
//router.route('/').get(getPeople).post(createPerson) menna me wage mehtod chaining wage widiyt get,post,delete wenama chain kara kra ynnath puluwan , link ekt adlwa thiyna method (get,post,put,delete) set eka me wage chain krl eka paara liynna puluwan

router.post('/:name' , (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false , msg : "please provide valid name"})
    }
    res.status(201).send({success: true, person:name})
})

router.post('/postman' , (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false , msg : "please provide valid name"})
    }
    res.status(201).send({success: true, person: [...users ,name] })
})

router.put('/:id' , (req,res) => { //menna meke thiyna link eka gihin postman eke check krahama gaanat upadate wenwa 4 user id thiyna thanata deepa kiyla update wenwa
    const { id } = req.params
    const { name } = req.body
    console.log(id, name )
    console.log('hello world')
})

//menna me put ekedi krnne user array ekat gihilla check krla blnwa id ekat adalwa user knk innwad nadda kiyla, innwa nm aluth array ekk hdnaw e id ekat adlwa userge name eka change krnwa , nattnm res ekn 404 error ekk denwa
router.put('/putmethod2/:id' , createPerson)
//delete mehtod ek 
//meke e sir kiynwa method eka wenas nm ekama path eka use krnnatth puluwan kiyla  ekiynne put method eke dapu path ekm delete ekt onnm dennth puluwan
router.delete('/api/users/deletemethod/:id', (req,res) => {

    const person = users.find((person) => person.id === Number(req.params.id)) //methndi id eka variable ekkt daala nha oject destructuring krla

    if(!person){
        return res.status(404).json({success: false , msg: `no pesrson with id: ${req.params.id}`})
    }

    const newUsers = users.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true , data: newUsers})



})

module.exports = router