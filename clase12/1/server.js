
const express = require('express');
const {Server: IOServer} = require('socket.io');
const {Server: HttpServer} = require('http');


//instancio todo el servidor
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


//creo la array mensjes
const  mensajes = [
    {author:"Juan",text:"¡Hola!¿Que tal?"},
    {author:"Pedro",text:"¡Muy bien!¿Yvos?"},
    {author:"Ana",text:"¡Genial!"}
]


//llamo desde httpserveer
const PORT =8080

const connectedServer = httpServer.listen(PORT,()=> {
    console.log('listeng port 8080')
})
connectedServer.on('error',error => console.log(`Error en Servidor ${error}`))




// recibo al server
io.on('connection',(socket) =>{

    //AVISO QUE SE CONECTO UN USUARIO
    console.log('User conected')
    
    //envio los mensajes a los clientes
    socket.emit('mensajes', mensajes)


    socket.on('nuevoMensaje',(mensaje) =>{
        
        //guardo los mensjes escuchados
        mensajes.push(mensaje)

        //envio el mensaje guardo y los anteriories
        io.sockets.emit('mensajes', mensajes)
  })
})

//midleware
app.use(express.static('public'))



