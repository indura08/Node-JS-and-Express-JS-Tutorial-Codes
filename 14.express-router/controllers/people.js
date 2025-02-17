let { users } = require('../data')

const getPeople = (req,res) => { //methna mulin thibbe /api/users namuth base eka widiyt '/' withrk daala wenas krnna one kiwwa meka haiyt wada krnna nm , mokda app.js eke api.use() eka athule kiyla deela thiynwa parameter ekk 'api/users ' kiyla eka thami meke base eka wenne , eka thami '/' lakunen nirupanaya krnne 
    res.status(200).json({success: true, data:users})
}

const createPerson = (req,res) => { //menna meke thiyna link eka gihin postman eke check krahama gaanat upadate wenwa 4 user id thiyna thanata deepa kiyla update wenwa
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

}
module.exports = {
    createPerson,
    getPeople
    
}

