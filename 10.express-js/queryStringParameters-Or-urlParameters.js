const express = require("express")
const app = express();

const { users } = require('./data');

app.get('/', (req,res) => {
    res.send("<h1>This is home page bruh!</h1><a href = '/api/users'>check users</a>")

})

app.get('/api/users/', (req, res) => {
    const newUser1 = users.map((user) => {
        const{ id, name, email } = user;
        return {id, name, email} // mekn krnne map eket thiyna call back function ekn return krnne menna me tika kiyl penna eki
    })

    res.send(newUser1);
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query

    let sortedArray = [...users]

    if(search){
        sortedArray = sortedArray.filter((user) => {
            return user.name.startsWith(search)
        })     
    }

    if(limit){
        sortedArray = sortedArray.slice(0, Number(limit))
    }

    if(sortedArray.length < 1){
        return res.status(200).json({success: true , data: []})
    }

    return res.status(200).json(sortedArray)

    // mekat note ekak hdgnna important part ekak note eka hdnna one ara url eke ? lakunath ekka search limit daala ghna kalla ganai anik theori
    //6:06:00 nwattuwe



})


app.listen(5002, ()=> console.log("server is running on port 5002"))