const  { readFile } = require("fs")

console.log('started first task')

readFile("6.event-loops/event-loops.txt" , "utf8" , (err , result)=>{

    if(err){
        console.log(err);
        return
    }
    console.log(result)
    console.log("completed first task")
})

console.log("starting next tasks or task!")

/*mekedi lineby line thami code eka run wenne mokda readFile method eka
synchronous method ekak nisa  2:39n nathara kale*/

