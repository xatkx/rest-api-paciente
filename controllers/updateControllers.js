
import { paciente } from "../models/paciente.js"


export const putPaciente = async (request, response, next) => {

    const { id } = request.query, newPacient = request.body
    try {
       const pacient = await paciente.updateOne({ _id: id}, newPacient)
        response.json({pacient})
    } catch (error) {
        console.log(error)
        response.json({error: true, msj: error})
        next()
    }
}