const express = require('express')
const app = express()

//let { users } = require ('./data')

//routers dekk haduwa eka import krgttta app.js ekt mnnna mehem
const users = require('./people.js')
const auth = require('./auth.js')


//static assest middleware
app.use(express.static('./11.post-method-inAdvanced/exampleApplication'))// menna me method ekan thami ara thiyna dam paata web eka browser ekt gatte
//parse form data middleware
app.use(express.urlencoded({extended: false})) //mekn thami url ekn adala name agaya ganna puluwan wenne. mmeka express ekn dena middleware ekk
//parse json middleware
app.use(express.json())

//import krpu router deka menna me widiyt cll krlai use krnne
//meke me mulin dena link ekak ekka thiyna paramter eka awilla base eka , ekn passe link eke  enna one ewa thami outer eka thiynne / lakunata passe. mokda / lakuna denne meke app.use eke thiyna base ekat adlwa
app.use('/api/users' , users)
app.use('/login' , auth)

app.listen(5002, () => console.log("server is listening on port 5002"))

