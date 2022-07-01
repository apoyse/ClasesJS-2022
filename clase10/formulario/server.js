import express from 'express'
const app = express()
let personas = []

app.set('view engine' ,'ejs' )
app.use(express.urlencoded({extended: true}))
app.set('views', './views');


app.get('/',(req,res)=>{
    res.render('pages/index',{personas})
    
})



app.post('/datos' ,(req,res) =>{
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
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