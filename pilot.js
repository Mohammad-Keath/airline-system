const newEvent = require('./events')
newEvent.on('took-off',(payload)=>{
    console.log(`${payload.id} flight is tooked off`);
    newEvent.emit('Flight',(payload))
})
newEvent.on('Arrived',(payload)=>{
    console.log(`${payload.id} flight is arrived`);
    newEvent.emit('Flight',(payload))
})