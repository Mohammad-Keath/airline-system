const newEvent = require('./events')
require('./manager')
require('./pilot')
let details = require('./manager')

setInterval(() => {
    let newdetail = new details
    console.log('................................................');
    newEvent.emit('new-flight',newdetail)
    
    setTimeout(() => {
        console.log('.............................................');
        console.log('Pilot :');
        newEvent.emit('took-off',newdetail)
        
    }, 4000);
    setTimeout(() => {
        console.log('.............................................');
        console.log('Pilot :');
        newEvent.emit('Arrived',newdetail)
    }, 3000);
     
      
}, 10000)


