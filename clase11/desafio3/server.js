
const express = require('express');
const {Server: IOServer} = require('socket.io');
const {Server: HttpServer} = require('http');


//instancio todo el servidor
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


//creo la array mensjes
const  mensajes = []


//llamo desde httpserveer
httpServer.listen(8080,()=> console.log('listeng port 8080'))


// recibo al server
io.on('connection',(socket) =>{

    //AVISO QUE SE CONECTO UN USUARIO
    console.log('usuario conect')
    
    //envio los mensajes a los clientes
    socket.emit('mensajes', mensajes)


    socket.on('mensaje',(data) =>{
        
        //guardo los mensjes escuchados
        mensajes.push({socketid:socket.id , mensaje:data})

        //envio el mensaje guardo y los anteriories
        io.sockets.emit('mensajes', mensajes)
  })
})

//midleware
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.sendFile('index.html', {root: __dirname})

})



