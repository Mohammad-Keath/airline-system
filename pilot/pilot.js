require('dotenv').config();
const port = process.env.PORT
const ioClient = require('socket.io-client')
const link = `http://localhost:${port}/airline`
const URL = `http://localhost:${port}`
const pilotCon = ioClient.connect(URL)
const pilotConnection = ioClient.connect(link)

/////////////////////////////////////////////////////////
pilotCon.emit('get_all')
pilotCon.on('schedialed',(payload)=>{
    // console.log(`the flight with id ${payload.id} has scadualed`);
    setTimeout(() => {
       pilotConnection.emit('took-off',(payload))
   }, 4000);
})
pilotCon.on('flight',(payload)=>{
    console.log(`Sorry i didn't catch this flight ID ${payload.id}`);
    setTimeout(() => {
       pilotConnection.emit('took-off',(payload))
   }, 4000);
})
pilotCon.on('ArrivedM',(payload)=>{
    console.log(`${payload.id} flight arrived`);
    pilotCon.emit('delete',(payload))

})


/////////////////////////////////////////////////////////

pilotConnection.on('tookOff',(payload)=>{
    console.log(`${payload.id} flight tooked off`);
    setTimeout(() => {
        pilotCon.emit('Arrived',payload)
    }, 3000);

})


