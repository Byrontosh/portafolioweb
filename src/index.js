// Importación de la variable app
const app = require('./server.js')



// Iniciar el servidor en el puerto 300

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})