
// modelo de datos 
import { paciente } from "../models/paciente.js"


export const deletePaciente = async (request, response, next) => {

    const {id} = request.query
    try {
        await paciente.deleteOne({_id: id})
        response.json({delete: true})
    } catch(err){
        response.json({delete: false})
        console.log(err)
        next()
    }

}