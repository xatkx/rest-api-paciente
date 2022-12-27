
import { paciente } from "../models/paciente.js"

export const getAll = async (request, response, next) => {


    try {
        const query = await paciente.find({})
        response.json(query)
    } catch (error) {
        console.log(error)
        next()
    }
    }

export const getOne = async (request, response, next) => {

    const id = request.query.id

    try {
        const myquery = await paciente.find({_id:id});
        response.setHeader('Content-Type', 'application/json');
        response.json(myquery)
    } catch (error) {
        console.log(error)
        response.setHeader('Content-Type', 'application/json');
        response.json({error: true,params:request.query})
        next()
    } 
}
