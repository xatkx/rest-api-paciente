import mongoose, { Schema } from "mongoose";


const pacienteObj = {
    nombre: { type:String,trin: true},
    propietario: { type:String,trin: true},
    fecha: { type:String,trin: true},
    hora: { type:String,trin: true},
    sintomas: { type:String,trin: true},
}

export const paciente = mongoose.model('pacientes', new Schema(pacienteObj))

