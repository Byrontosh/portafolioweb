// Importación de express
const express = require('express')
// Importar path
const path = require('path');
// Importar handlebars
const { engine }  = require('express-handlebars')
// Importar methodOverride
const methodOverride = require('method-override');



// Inicializaciones
const app = express()


// Configuraciones 
app.set('port', process.env.port || 5000)
app.set('views', path.join(__dirname, 'views'))

// Establecer el directorio de las vistas
app.set('views',path.join(__dirname, 'views'))
// Configuraciones para el motor de plantilla
// 1 archivo master (master page)
// 2 establecer el directorio layouts
// 3 establecer el directorio partials
// 4 extensión de las páginas .hbs
app.engine('.hbs',engine({
    defaultLayout:'main', // 1
    layoutsDir: path.join(app.get('views'),'layouts'), // 2
    partialsDir: path.join(app.get('views'),'partials'), // 3
    extname:'.hbs' // 4
}))
// Establecer el motor de plantillas y su extensión
app.set('view engine','.hbs')



// Middlewares 
app.use(express.urlencoded({extended:false})) // FORMULARIOS - VISTAS
app.use(methodOverride('_method'))



// Variables globales



// Rutas 
app.use(require('./routers/index.routes'))
app.use(require('./routers/portafolio.routes'))



// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


// Exportar la variable app
module.exports = app