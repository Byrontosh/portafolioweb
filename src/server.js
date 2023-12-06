// Importación de express
const express = require('express')
// Importar path
const path = require('path');



// Inicializaciones
const app = express()


// Configuraciones 
app.set('port', process.env.port || 5000)
app.set('views', path.join(__dirname, 'views'))



// Middlewares 
app.use(express.urlencoded({extended:false})) // FORMULARIOS - VISTAS


// Variables globales



// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})


// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


// Exportar la variable app
module.exports = app