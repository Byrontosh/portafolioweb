
// Crear un método para validar la protección de rutas y a la vez exportar la función
module.exports.isAuthenticated = (req,res,next)=>{
    
    // Validar si existe una autenticación
    if(req.isAuthenticated()){
        // Proceso de continuar
        return next()
    }
    // Proceso de redireccionar al login
    res.redirect('/user/login')
}
