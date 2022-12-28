import Express, { urlencoded, json } from "express";
import mongoose from "mongoose";
//import pacienteSchem from "./models/paciente.js"
import router from "./router/apiRuter.js";
import mongodb from './config/mongooseCRM.js'
import cors from 'cors'

// model setting

// const myPaciente = mongoose.model('pacientes', pacienteSchem)


// const que = new myPaciente({
//     nombre:'kediwn',
//     propietario:'2',

//     fecha: '3',
//     hora: '4',
//     sintomas: '5'
// })


const port = process.env.PORT || 1010
// app 
const API = Express()



console.log('fff')
// middle ware
API.use(cors()) /// cors
API.use( urlencoded({extended: true}))


// router
API.use(router)

API.listen(port,() => {
    console.log('on live in port:',port)
    mongodb()

})