
const newEvent = require('./events')
const { faker } = require('@faker-js/faker');
newEvent.on('new-flight',(payload)=>{
    console.log(`Manager: a new flight with id of ${payload.id} has been scheduled at ${payload.time} .` )
    newEvent.emit('Flight',(payload))
})
newEvent.on('Flight',(payload)=>{
    console.log('Flight');
    console.log(payload)
})
 class details  {
    constructor(){
        this.event = 'new-flight'
        this.id = faker.string.uuid(),
        this.pilot = faker.person.fullName(),
        this.destination = faker.location.country(),
        this.time = faker.date.future()

    }
}
module.exports=details
// console.log(details);

