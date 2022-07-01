const express = require('express')

const app = express()


app.set('view engine' ,'ejs' )

app.get('/',(req,res)=>{
    let mascots = [
        {name: "Sammy", organanization :"DigitalOcean" , birth_year : '2022'},
        {name: "Reina", organanization :"DigitalOcean" , birth_year : '2022'},
        {name: "HOla", organanization :"DigitalOcean" , birth_year : '2022'}
    ]
    let tagline = "Hola mascotas"
    res.render("pages/index.ejs" , {
        tagline :tagline,
        mascots : mascots
    })
    
})
app.get ('/about ',(req,res) => {
    res.render('pages/about');
})

/*Server Listen*/
const PORT=8080
const server=app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto${server.address().port}`)
server.on('error',error=>console.log(`Error en servidor${error}`))
})


// <%=Incrusta en la plantilla el valor tal cual está
// <%-Incrusta en la plantilla el valor renderizado como HTML
// <%'Scriptlet':Admite instrucciones en JS para declaracióm de variables y control de flujo