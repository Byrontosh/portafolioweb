// Importación de la Clase Router
const {Router} = require('express')
const { renderIndex, renderLogin } = require('../controllers/index.controllers')

// Importación de las funciones



// creación de la instancia 
const router = Router()


// Ruta inicial (home - index)
router.get('/',renderIndex)



// Ruta login
router.get('/login', renderLogin)





// Exportar la variable router
module.exports = router
