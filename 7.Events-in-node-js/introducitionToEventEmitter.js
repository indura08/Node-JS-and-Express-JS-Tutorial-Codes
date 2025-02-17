const EventEmitter = require('events')

const customemitter = new EventEmitter()

customemitter.on("response" , (x,y,z) =>{
    console.log(x+y+z)
})

customemitter.emit("response", 10,20,100)  // mekedi response kiyna event eka sidda unama krnna one de on eke deela response kiyna event eka sidda krnna kiyla emit ekekdi krnwa.

