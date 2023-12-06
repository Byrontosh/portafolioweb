// Importación de la Clase Router
const {Router} = require('express')


// creación de la instancia 
const router = Router()


// Ruta inicial (home - index)
router.get('/',(req,res)=>{
    res.render('index')
})


// Ruta login
router.get('/login',(req,res)=>{
    res.render('login')
})




// Exportar la variable router
module.exports = router
