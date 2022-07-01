
const express = require('express');

const {Server: IOServer} = require('socket.io');
const {Server: HttpServer} = require('http');


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//llamo desde httpserveer
httpServer.listen(8080,()=> console.log('listeng port 8080'))

io.on('connection',(socket) =>{
    //AVISO QUE SE CONECTO UN USUARIO
    console.log('usuario conect')
    
    //envio mensajes al usuario q este conectado
    // socket.emit('mensajes', mensajes)

    socket.on('mensaje',(data) =>{
        submitsubmitio.sockets.emit('mensajes',data)
  })
})

//midleware
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.sendFile('index.html', {root: __dirname})

})



