// Importación de la Clase Router
const{Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller')


// creación de la instancia 
const router = Router()


// Ruta para mostrar el fomulario de registro
router.get('/user/register',renderRegisterForm)
// Ruta para capturar la información del formulario y almacenar en bdd
router.post('/user/register',registerNewUser)


// Ruta para mostrar el fomrulario de login
router.get('/user/login',renderLoginForm)
// Ruta para realizar en inicio de sesión con los datos del form
router.post('/user/login',loginUser)


// Ruta para realizar el cierre de sesión
router.post('/user/logout',logoutUser)




// Exportar la variable router
module.exports = router