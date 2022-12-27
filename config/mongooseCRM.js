import mongoose from "mongoose";
//import pacienteSchem from "./models/paciente.js"
 const esto = `mongodb+srv://kedwin:${process.env.PASSWORD}@cluster0.kg60nl3.mongodb.net/?retryWrites=true&w=majority`
export default () => {
    const mongodbConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.Promise = global.Promise
    mongoose.connect(esto,mongodbConfig)
    mongoose.set('strictQuery', false);
    
}