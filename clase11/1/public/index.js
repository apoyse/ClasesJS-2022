

const socket = io()

socket.on('mi primer mensaje', (data)=>{
    //alert(data)
    console.log(data)
    socket.emit('notificacion', 'Mensaje enviado desde el cliente')
})

