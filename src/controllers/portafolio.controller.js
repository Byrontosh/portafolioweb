
// Importar el modelo 
const Portfolio = require('../models/Portfolio')



// MÉTODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    // Almacenar todos los portafolios del usuario que inicia sesión en la variable y luego convertir en json
    const portfolios = await Portfolio.find({user:req.user._id}).lean()
    // Invoocar a la vista y mandar la variable 
    res.render("portafolio/allPortfolios",{portfolios})
}




// MÉTODO PARA LISTAR EL DETALLE DE UN PORTAFOLIO
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}






// MÉTODO PARA MOSTRAR EL FORMULARIO 
const renderPortafolioForm = (req,res)=>{
    // INVOCACIÓN DE LA VISTA
    res.render('portafolio/newFormPortafolio')
}

// MÉTODO PARA GUARDAR EN LA BDD LO CAPTURADO EN EL FORM 
const createNewPortafolio = async (req,res)=>{
    // Crear una nueva instancia del Portafolio
    const newPortfolio = new Portfolio(req.body)
    // Asociar el usuario que inicia sesión al portafolio
    newPortfolio.user = req.user._id
    // Almacenar en la BDD
    await newPortfolio.save()
    res.redirect('/portafolios')
}









// MÉTODO PARA MOSTRAR EL FORMULARIO PARA ACTUALIZAR  
const renderEditPortafolioForm = async(req,res)=>{
    // Cargar la información del portafolio y convertir en un json
    const portfolio = await Portfolio.findById(req.params.id).lean()
    // Invocar la vista y pasar la variable
    res.render('portafolio/editPortfolio',{portfolio})
}



// MÉTODO PARA ACTUALIZAR EN LA BDD LO CAPTURADO EN EL FORM 
const updatePortafolio = async(req,res)=>{
    // Obtener un portafolio en base al id
    const portfolio = await Portfolio.findById(req.params.id).lean()
    // Que el usuario que actualice su portafolio sea el mismo que inicie eseión
    if(!(portfolio.user.toString() !== req.user._id.toString())) return res.redirect('/portafolios')
    
    // Dessestructurar en req.body
    const {title,category,description}= req.body
    // Actualizar en la BDD
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    // Redireccionar a la vista portafolios
    res.redirect('/portafolios')
}









// MÉTODO PARA ELIMINAR EN LA BDD 
const deletePortafolio = async(req,res)=>{

    // Utilizar el método findByIdAndDelete
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
}







// EXPORTAR LAS FUNCIONES
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}