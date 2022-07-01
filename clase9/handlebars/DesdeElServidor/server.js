const express = require('express');

const fs = require('fs');
const handlebars = require('express-handlebars');
const app = express()

//handlebars
app.engine('hbs',
 handlebars.engine({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir:__dirname+'/views/layouts/',// ruta a la plantilla principal
    partialsDir:__dirname+'/views/partials/'// ruta a los parciales
  })
);                                      
             

// seteamos el motor de plantillas
app.set('view engine','hbs');
// establezco el directorio de las vistas
// app.set('views',_dirname+'/views');
// app.use('/public',express.static(_dirname+'/public'));
app.set('views','./views');
// espacio publico del servidor
app.use(express.static('public'));


fakeApi = () => [
    {name:'John',lane:'midlaner'},
    {name:'Jane',lane:'toplaner'},
    {name:'Jack',lane:'midlaner'},
    {name:'Jill',lane:'midlaner'},
    {name:'Joe',lane:'midlaner'}
];

app.get('/',(req,res)=>{
    res.render('main',{suggestedChamps:fakeApi(),listExists: true });
});
const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server listening on port${PORT}`);
});