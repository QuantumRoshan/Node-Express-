const EventEmitter = require('events');  

const customEmitter = new EventEmitter();

// on   - listen for a event
// emit - emit an event
customEmitter.on('response',(name,age)=>{
    console.log(`Data Received of ${name} of age ${age}`);
})
customEmitter.on('response',(naam)=>{
    console.log(`Data Received Second time of ${naam}`);
})

customEmitter.emit('response','roshan',69);

//server can also be created using on and emit method.eg is in 5-http-modules.js in last
