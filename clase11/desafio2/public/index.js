

const socket = io()

const input = document.querySelector('input')

input.addEventListener('input',()=>{
    socket.emit('mensaje',input.value)
})



socket.on('mensajes', (data)=>{
    //alert(data)
    // console.log(data)
    document.querySelector('p').innerText = data   //lo manda al <p>
})

