
const express = require('express');

const {Server: IOServer} = require('socket.io');
const {Server: HttpServer} = require('http');


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//llamo desde httpserveer
httpServer.listen(8080,()=> console.log('listeng port 8080'))

io.on('connection',(socket) =>{
    console.log(`usuario conectado`)

    socket.emit('mi primer mensaje' , 'Este es un msj desde el Server')
    socket.on('notificacion',(data)=>{
        console.log(data)
    })
})

//midleware
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.sendFile('index.html', {root: __dirname})

})



