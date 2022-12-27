import {paciente} from '../models/paciente.js'

export const addPaciente = async (request, response,next) => {

    const thiss = new paciente(request.body)

    try {
        await thiss.save()
        response.json({ok:true})
    } catch (error) {
        console.log(error)
        next()
    }
    
}