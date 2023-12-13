// Importación de la Clase Router
const{Router} = require('express')

// Importación de los métodos del controlador
const { renderPortafolioForm, createNewPortafolio, renderAllPortafolios, renderPortafolio, renderEditPortafolioForm, updatePortafolio, deletePortafolio } = require('../controllers/portafolio.controller')

// creación de la instancia 
const router = Router()


// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', renderPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN BDD
router.post('/portafolio/add', createNewPortafolio)


// RUTA PARA PRESENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', renderAllPortafolios)
// RUTA PARA PRESENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', renderPortafolio)


// RUTA PARA CARGAR LA VISTA DEL FORMULARIO PARA ACTUALIZAR
router.get('/portafolio/edit/:id', renderEditPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR (ACTUALIZAR) EN BDD
router.put('/portafolio/edit/:id', updatePortafolio)

// RUTA PARA ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id', deletePortafolio)



// Exportar la variable router
module.exports = router