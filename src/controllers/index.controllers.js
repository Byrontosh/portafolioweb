// Controlador - Trabajar en la lógica de la aplicación software


// Renderizar la página inicial (home)
const renderIndex = (req,res)=>{
    res.render('index')
}


// Renderizar la página login
const renderLogin = (req,res)=>{
    res.render('login')
}






// Exportación de las funciones 
module.exports = {
    renderIndex,
    renderLogin
}