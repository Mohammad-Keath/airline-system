require('dotenv').config();
const port = process.env.PORT
const io = require('socket.io')(port)
const { faker } = require('@faker-js/faker');



io.on('connection',(socket)=>{
    console.log(`connected with ${socket.id}`);
    socket.on('new-flight',(payload)=>{
        let obj = {
            event: `new flight `,
            time: new Date(),
            Details: payload
        }
        console.log(obj)
        io.emit('schedialed',payload)
    })
    socket.on('Arrived',(payload)=>{
        let obj = {
            event: `arrived `,
            time: new Date(),
            Details: payload
        }
        console.log(obj)
        io.emit('ArrivedM',payload)
    })
    
})


const airline = io.of('/airline')

airline.on('connection',(socket)=>{
    console.log(`connected the airline with ${socket.id}`);
    socket.on('took-off',(payload)=>{
        let obj = {
            event: `took off`,
            time: new Date(),
            Details: payload
        }
        console.log(obj);
        socket.emit('tookOff',payload)
    })

})