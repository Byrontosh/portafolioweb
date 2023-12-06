// Importación de Schema y el model
const {Schema, model} = require('mongoose')


// Crear nuestro esquema de la tabla de la BDD
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},
{
    timestamps:true
})

// Exportación del modelo y del esquema
module.exports = model('portfolio',portfolioSchema)